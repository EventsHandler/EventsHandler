import { prisma } from "../../../prisma.js"
import { Group, Chat, Event } from "../../types.generated.js"

export type SettingNames = "chat:autojoin" | "event:public" | "event:autojoin" | "group:autojoin" | "chat:inheritPermissions" | "event:inheritPermissions" | "chat:private" | "event:private"

export type Setting = {
  bit: bigint
  name: SettingNames
  description: string
}

export type Settings = {
  settings: Setting[]
  has(entity: Chat | Group | Event, setting: SettingNames): boolean
  has2(options: HasSettingParams): Promise<boolean>
  default: bigint
  require(options: HasSettingParams): Promise<void>
  add(options: HasSettingParams): Promise<void>
  remove(options: HasSettingParams): Promise<void>
}

export type EntityTypes = "chat" | "event" | "group"

export type HasSettingParams = {
  entityId: string
  setting: SettingNames
  entityType?: EntityTypes
  notFoundErr?: string
  settingErr?: string
}

const eSettings: Setting[] = [
  {
    bit: 1n,
    name: "chat:autojoin",
    description: ""
  },
  {
    bit: 2n,
    name: "event:public",
    description: ""
  },
  {
    bit: 4n,
    name: "event:autojoin",
    description: ""
  },
  {
    bit: 8n,
    name: "group:autojoin",
    description: ""
  },
  {
    bit: 16n,
    name: "chat:inheritPermissions",
    description: ""
  },
  {
    bit: 32n,
    name: "event:inheritPermissions",
    description: ""
  },
  {
    bit: 64n,
    name: "chat:private",
    description: ""
  },
  {
    bit: 128n,
    name: "event:private",
    description: ""
  },
]

function settingHas(entity: Chat | Group | Event, setting: SettingNames): boolean {
  const findSetting = eSettings.find(p => p.name === setting)
  if(!findSetting) return false
  return (entity.settings & findSetting.bit) !== 0n
}

async function findEntity(entityId: string, entityType?: EntityTypes): Promise<Chat | Event | Group | null> {
  let entity: Chat | Event | Group | null = null
  if(entityType) {
    switch(entityType) {
      case "chat": entity = await prisma.chat.findUnique({ where: { id: entityId } }); break
      case "event": entity = await prisma.event.findUnique({ where: { id: entityId } }); break
      case "group": entity = await prisma.group.findUnique({ where: { id: entityId } }); break
    }
  } else {
    entity = 
      await prisma.chat.findUnique({ where: { id: entityId } }) ??
      await prisma.event.findUnique({ where: { id: entityId } }) ??
      await prisma.group.findUnique({ where: { id: entityId } })
  }
  return entity
}

async function settingHas2({entityId, setting, entityType, notFoundErr = "Entitatea nu a fost gasita."}: HasSettingParams): Promise<boolean> {
  const entity = await findEntity(entityId, entityType)
  if(!entity) {
    throw new Error(notFoundErr)
  }
  return settingHas(entity, setting)
}

async function requireSetting(options: HasSettingParams): Promise<void> {
  if(!options.settingErr) options.settingErr = `Acest ${options.entityType} nu are setarea ${options.setting}`
  let hasSett = await settingHas2(options)
  if(!hasSett) {
    throw new Error(options.settingErr)
  }
}

async function addSett(options: HasSettingParams): Promise<void> {
  let entity: Chat | Event | Group | null = await findEntity(options.entityId, options.entityType)
  const findSetting = eSettings.find(a => a.name === options.setting)
  if(!entity || !findSetting) {
    throw new Error(options.notFoundErr)
  }
  if(options.entityType) {
    switch(options.entityType) {
      case "chat": await prisma.chat.update({ where: { id: options.entityId }, data: { settings: entity.settings | findSetting.bit } }); break
      case "event": await prisma.event.update({ where: { id: options.entityId }, data: { settings: entity.settings | findSetting.bit } }); break
      case "group": await prisma.group.update({ where: { id: options.entityId }, data: { settings: entity.settings | findSetting.bit } }); break
    }
  } else {
    await prisma.chat.update({ where: { id: options.entityId }, data: { settings: entity.settings | findSetting.bit } }) ??
    await prisma.event.update({ where: { id: options.entityId }, data: { settings: entity.settings | findSetting.bit } }) ??
    await prisma.group.update({ where: { id: options.entityId }, data: { settings: entity.settings | findSetting.bit } })
  }
}

async function removeSett(options: HasSettingParams): Promise<void> {
  let entity: Chat | Event | Group | null = await findEntity(options.entityId, options.entityType)
  const findSetting = eSettings.find(a => a.name === options.setting)
  if(!entity || !findSetting) {
    throw new Error(options.notFoundErr)
  }
  if(options.entityType) {
    switch(options.entityType) {
      case "chat": await prisma.chat.update({ where: { id: options.entityId }, data: { settings: entity.settings & ~findSetting.bit } }); break
      case "event": await prisma.event.update({ where: { id: options.entityId }, data: { settings: entity.settings & ~findSetting.bit } }); break
      case "group": await prisma.group.update({ where: { id: options.entityId }, data: { settings: entity.settings & ~findSetting.bit } }); break
    }
  } else {
    await prisma.chat.update({ where: { id: options.entityId }, data: { settings: entity.settings & ~findSetting.bit } }) ??
    await prisma.event.update({ where: { id: options.entityId }, data: { settings: entity.settings & ~findSetting.bit } }) ??
    await prisma.group.update({ where: { id: options.entityId }, data: { settings: entity.settings & ~findSetting.bit } })
  }
}

const defaultPermsUser: bigint = eSettings.reduce((acc: bigint, { name, bit }: Setting) => {
  if(
    name === "event:public"
  ) return acc = acc | bit
  return acc
}, 0n)

export const settings: Settings = {
  settings: eSettings,
  has: settingHas,
  has2: settingHas2,
  default: defaultPermsUser,
  require: requireSetting,
  add: addSett,
  remove: removeSett
}