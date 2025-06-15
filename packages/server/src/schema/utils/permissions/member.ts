import { prisma } from "../../../prisma.js"
import { ChatMember, EventMember, GroupMember } from "../../types.generated.js"

export type MemberPermNames = "owner" | "administrator" | "chat:link" | "chat:sendMessage" | "chat:viewMessages" | "chat:deleteMessage" | "chat:manageMembers" | "chat:manager" | "event:link" | "event:manageMembers" | "event:manager"

export type MemberPerm = {
  bit: bigint
  name: MemberPermNames
  description: String
}

export type MemberPerms = {
  perms: MemberPerm[],
  has(userId: string, entityId: string, perm: MemberPermNames, targetId?: string, notFoundErr?: string): Promise<boolean>,
  default: bigint,
  require(userId: string, entityId: string, perm: MemberPermNames, targetId?: string, notFoundErr?: string, permErr?: string): Promise<void>
}

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
]

async function memberPermHas2(userId: string, entityId: string, perm: MemberPermNames, targetId: string, notFoundErr: string = "Membrul nu a fost gasit.") {
  const member: ChatMember | EventMember | GroupMember | null = 
    await prisma.chatMember.findUnique({ where: { userId_chatId: { userId, chatId: entityId } }, include: { chat: true } }) ??
    await prisma.eventMember.findUnique({ where: { userId_eventId: { userId, eventId: entityId } }, include: { event: true } }) ??
    await prisma.groupMember.findUnique({ where: { userId_groupId: { userId, groupId: entityId } }, include: { group: true } })
  let target : ChatMember | EventMember | GroupMember | null  = null
  if(targetId) {
    target = 
      await prisma.chatMember.findUnique({ where: { userId_chatId: { userId: targetId, chatId: entityId } }, include: { chat: true } }) ??
      await prisma.eventMember.findUnique({ where: { userId_eventId: { userId: targetId, eventId: entityId } }, include: { event: true } }) ??
      await prisma.groupMember.findUnique({ where: { userId_groupId: { userId: targetId, groupId: entityId } }, include: { group: true } })
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

async function requirePerm(userId: string, entityId: string, perm: MemberPermNames,
  targetId: string,
  notFoundErr: string = "Membrul nu a fost gasit.",
  permErr: string = "Nu ai permisiune sa executi aceasta actiune.") {
    const hasPerm = await memberPermHas2(userId, entityId, perm, targetId, notFoundErr)
    if(!hasPerm) {
      throw new Error(permErr)
    }
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
  require: requirePerm
}