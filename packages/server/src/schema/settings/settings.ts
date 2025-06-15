import { prisma } from "../../prisma.js"
import { Group, Chat, Event } from "../types.generated.js"

export type SettingNames = "chat:autojoin" | "event:public" | "event:autojoin"

export type Setting = {
  bit: bigint
  name: SettingNames
  description: string
}

export type Settings = {
  settings: Setting[],
  has(entity: Chat | Group | Event, setting: SettingNames): boolean,
  has2(entityId: string, setting: SettingNames): Promise<boolean>,
  default: bigint
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
  }
]

function settingHas(entity: Chat | Group | Event, setting: SettingNames): boolean {
  const findSetting = eSettings.find(p => p.name === setting)
  if(!findSetting) return false
  return (entity.settings & findSetting.bit) !== 0n
}

async function settingHas2(entityId: string, setting: SettingNames, notFoundErr: string = "Entitatea nu a fost gasita."): Promise<boolean> {
  const entity = 
    await prisma.chat.findUnique({ where: { id: entityId } }) ??
    await prisma.event.findUnique({ where: { id: entityId } }) ??
    await prisma.group.findUnique({ where: { id: entityId } })
  if(!entity) {
    throw new Error(notFoundErr)
  }
  return settingHas(entity, setting)
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
  default: defaultPermsUser
}