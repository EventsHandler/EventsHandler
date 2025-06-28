import { prisma } from "../../../prisma.js"
import { ExtendedUser, MemberPermsCtx } from "../../../types/context.js"
import { ChatMember, EventMember, GroupMember, User } from "../../types.generated.js"

export type MemberPermNamesGeneral = "owner" | "administrator" 
export type MemberPermNamesChat = "chat:link" | "chat:sendMessage" | "chat:viewMessages" | "chat:deleteMessage" | "chat:manageMembers" | "chat:manager" 
export type MemberPermNamesEvent = "event:link" | "event:manageMembers" | "event:manager"
export type MemberPermNamesGroup = "group:link" | "group:manageMembers" | "group:manager"

export type MemberPermNames = MemberPermNamesGeneral | MemberPermNamesChat | MemberPermNamesEvent | MemberPermNamesGroup

export type MemberPerm = {
  bit: bigint
  name: MemberPermNames
  description: String
}

export type MemberParamsCheckInput = {
  userId: string
  entityId: string
  perm: MemberPermNames
  entityType: EntityType
  targetId?: string
  notFoundErr?: string
  permErr?: string
}

export type MemberPerms = {
  perms: MemberPerm[]
  has(options: MemberParamsCheckInput): Promise<boolean>
  default: bigint
  require(options: MemberParamsCheckInput): Promise<void>
  add(options: MemberParamsCheckInput): Promise<void>
  remove(options: MemberParamsCheckInput): Promise<void>
  isValidPerm(perm: string): boolean
}

type EntityType = "chat" | "event" | "group"

const perms: MemberPerm[] = [
  {
    bit: 1n,
    name: "administrator",
    description: ""
  },
  {
    bit: 2n,
    name: "chat:link",
    description: ""
  },
  {
    bit: 4n,
    name: "chat:sendMessage",
    description: ""
  },
  {
    bit: 8n,
    name: "chat:viewMessages",
    description: ""
  },
  {
    bit: 16n,
    name: "chat:deleteMessage",
    description: ""
  },
  {
    bit: 32n,
    name: "chat:manageMembers",
    description: ""
  },
  {
    bit: 64n,
    name: "chat:manager",
    description: ""
  },
  {
    bit: 128n,
    name: "event:link",
    description: ""
  },
  {
    bit: 256n,
    name: "event:manageMembers",
    description: ""
  },
  {
    bit: 512n,
    name: "event:manager",
    description: ""
  },
  {
    bit: 1024n,
    name: "group:link",
    description: ""
  },
  {
    bit: 2048n,
    name: "group:manageMembers",
    description: ""
  },
  {
    bit: 4096n,
    name: "group:manager",
    description: ""
  }
]

async function memberPermHas2({
  userId,
  entityId,
  entityType,
  perm,
  targetId,
  notFoundErr = "Membrul nu a fost gasit."
}: MemberParamsCheckInput): Promise<boolean> {
  let member: ChatMember | EventMember | GroupMember | null = null
  let target: ChatMember | EventMember | GroupMember | null = null
  switch(entityType) {
    case "chat": member = await prisma.chatMember.findUnique({ where: { userId_chatId: { userId, chatId: entityId } }, include: { chat: true } }); break
    case "event": member = await prisma.eventMember.findUnique({ where: { userId_eventId: { userId, eventId: entityId } }, include: { event: true } }); break
    case "group": member = await prisma.groupMember.findUnique({ where: { userId_groupId: { userId, groupId: entityId } }, include: { group: true } }); break
  }
  if(targetId) {
    switch(entityType) {
      case "chat": target = await prisma.chatMember.findUnique({ where: { userId_chatId: { userId: targetId, chatId: entityId } }, include: { chat: true } }); break
      case "event": target = await prisma.eventMember.findUnique({ where: { userId_eventId: { userId: targetId, eventId: entityId } }, include: { event: true } }); break
      case "group": target = await prisma.groupMember.findUnique({ where: { userId_groupId: { userId: targetId, groupId: entityId } }, include: { group: true } }); break
    }
  }

  if(!member) {
    throw new Error(notFoundErr)
  }
  let entity = null
  if('chat' in member) entity = member.chat 
  if('event' in member) entity = member.event
  if('group' in member) entity = member.group
  if(!entity) {
    throw new Error(notFoundErr)
  }
  if(entity.ownerId === targetId) return false // verify if target is the owner
  if(entity.ownerId === userId) return true // verify if the user is the owner
  if(member.permissions % 2n && perm !== "owner") return true // verify if user has administrator perm
  const findPerm = perms.find(p => p.name === perm)
  if(!findPerm) return false // verify if perm exists
  if(target && (member.permissions & findPerm.bit) === (target.permissions & findPerm.bit)) return false // verify if target has the same permissions
  return (member.permissions & findPerm.bit) !== 0n // final rezult
}

async function requirePerm(options: MemberParamsCheckInput) {
  if(!options.permErr) options.permErr = "Nu ai permisiune sa executi aceasta actiune."
    const hasPerm = await memberPermHas2(options)
    if(!hasPerm) {
      throw new Error(options.permErr)
    }
}

export async function buildUserCtxPerm(user: ExtendedUser, type: EntityType): Promise<MemberPermsCtx> {
  return {
    has: async (id, perm, options = {}) => {
      return await memberPermHas2({ userId: user.id, entityId: id, perm, entityType: type, targetId: options?.target, notFoundErr: options?.notFoundErr })
    },
    require: async (id, perm, options = {}) => {
      return await requirePerm({ entityId: id, perm, entityType: type, userId: user.id, notFoundErr: options?.notFoundErr, permErr: options?.permErr, targetId: options?.target })
    },
    add: async (id, perm, options = {}) => {
      return await addPerm({ userId: user.id, entityId: id, perm, entityType: type, notFoundErr: options?.notFoundErr })
    },
    remove: async (id, perm, options = {}) => {
      return await removePerm({ userId: user.id, entityId: id, perm, entityType: type, notFoundErr: options?.notFoundErr })
    } 
  }
}

async function addPerm({
  userId,
  entityId,
  entityType,
  perm,
  notFoundErr = "Membrul nu a fost gasit.",
}: MemberParamsCheckInput): Promise<void> {
  let member: ChatMember | EventMember | GroupMember | null = null
  switch(entityType) {
    case "chat": member = await prisma.chatMember.findUnique({ where: { userId_chatId: { userId, chatId: entityId } }, include: { chat: true } }); break
    case "event": member = await prisma.eventMember.findUnique({ where: { userId_eventId: { userId, eventId: entityId } }, include: { event: true } }); break
    case "group": member = await prisma.groupMember.findUnique({ where: { userId_groupId: { userId, groupId: entityId } }, include: { group: true } }); break
  }
  const permFind = perms.find(p => p.name === perm)
  if(!member || !permFind) {
    throw new Error(notFoundErr)
  }
  switch(entityType) {
    case "chat": await prisma.chatMember.update({ where: { userId_chatId: { userId, chatId: entityId } }, data: { permissions: member.permissions | permFind.bit } })
    case "event": await prisma.eventMember.update({ where: { userId_eventId: { userId, eventId: entityId } }, data: { permissions: member.permissions | permFind.bit } })
    case "group": await prisma.groupMember.update({ where: { userId_groupId: { userId, groupId: entityId } }, data: { permissions: member.permissions | permFind.bit } })
  }
}

async function removePerm({
  userId,
  entityId,
  entityType,
  perm,
  notFoundErr = "Membrul nu a fost gasit.",
}: MemberParamsCheckInput): Promise<void> {
  let member: ChatMember | EventMember | GroupMember | null = null
  switch(entityType) {
    case "chat": member = await prisma.chatMember.findUnique({ where: { userId_chatId: { userId, chatId: entityId } }, include: { chat: true } }); break
    case "event": member = await prisma.eventMember.findUnique({ where: { userId_eventId: { userId, eventId: entityId } }, include: { event: true } }); break
    case "group": member = await prisma.groupMember.findUnique({ where: { userId_groupId: { userId, groupId: entityId } }, include: { group: true } }); break
  }
  const permFind = perms.find(p => p.name === perm)
  if(!member || !permFind) {
    throw new Error(notFoundErr)
  }
  switch(entityType) {
    case "chat": await prisma.chatMember.update({ where: { userId_chatId: { userId, chatId: entityId } }, data: { permissions: member.permissions & ~permFind.bit } })
    case "event": await prisma.eventMember.update({ where: { userId_eventId: { userId, eventId: entityId } }, data: { permissions: member.permissions & ~permFind.bit } })
    case "group": await prisma.groupMember.update({ where: { userId_groupId: { userId, groupId: entityId } }, data: { permissions: member.permissions & ~permFind.bit } })
  }
}

function isValidPerm(perm: string): perm is MemberPermNames {
  const validPerms = perms.map(p => p.name)
  return (validPerms as readonly string[]).includes(perm)
}

const defaultPermsUser: bigint = perms.reduce((acc: bigint, { name, bit }: MemberPerm) => {
  if(
    name === "chat:sendMessage" ||
    name === "chat:viewMessages"
  ) return acc = acc | bit
  return acc
}, 0n)

export const memberPerms: MemberPerms = {
  perms,
  has: memberPermHas2,
  default: defaultPermsUser,
  require: requirePerm,
  add: addPerm,
  remove: removePerm,
  isValidPerm
}