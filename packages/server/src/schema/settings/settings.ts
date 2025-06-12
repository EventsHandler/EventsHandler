import { Group, Chat, Event } from "../types.generated.js"

export type SettingNames = "chat:autojoin"

export type Setting = {
  bit: bigint
  name: SettingNames
  description: String
}

export type Settings = {
  settings: Setting[],
  has(entity: Chat | Group | Event, setting: SettingNames): boolean,
  default: bigint
}

const eSettings: Setting[] = [
  {
    bit: 1n,
    name: "chat:autojoin",
    description: ""
  }
]

function permsUserHas(entity: Chat | Group | Event, setting: SettingNames): boolean {
  const findSetting = eSettings.find(p => p.name === setting)
  if(!findSetting) return false
  return (entity.settings & findSetting.bit) !== 0n
}

const defaultPermsUser: bigint = eSettings.reduce((acc: bigint, { name, bit }: Setting) => {
  if(
    false
  ) return acc = acc | bit
  return acc
}, 0n)

export const settings: Settings = {
  settings: eSettings,
  has: permsUserHas,
  default: defaultPermsUser
}