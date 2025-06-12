import { User } from "../types.generated.js"

export type AppPermNames = "administrator" | "manageChats"

export type AppPerm = {
  bit: bigint
  name: AppPermNames
  description: String
}

export type AppPerms = {
  perms: AppPerm[]
  has(user: User, perm: AppPermNames): boolean,
  default: bigint
}

const perms: AppPerm[] = [
  {
    bit: 1n,
    name: "administrator",
    description: ""
  },
  {
    bit: 2n,
    name: "manageChats",
    description: ""
  }
]

function permAppUserHas(user: User, perm: AppPermNames): boolean {
  if(!user) return false
  if(user.appPermissions % 2n) return true
  const findPerm = perms.find(p => p.name === perm)
  if(!findPerm) return false
  return (user.appPermissions & findPerm.bit) !== 0n
}

const defaultPermsApp: bigint = perms.reduce((acc: bigint, { bit, name }: AppPerm) => {
  if(
    name === "manageChats"
  ) acc = acc | bit
  return acc
}, 0n)

export const appPerms: AppPerms = {
  perms,
  has: permAppUserHas,
  default: defaultPermsApp
}