import { User } from '../generated/prisma/index.js'
import { MemberPermNames } from '../schema/utils/permissions/member.js'

export interface MemberPermsCtx {
  has(id: string, perm: MemberPermNames, options?: { notFoundErr?: string, target?: string }): Promise<boolean>
  require(id: string, perm: MemberPermNames, options?: { notFoundErr?: string, target?: string, permErr?: string }): Promise<void>
  add(id: string, perm: MemberPermNames, options?: { notFoundErr?: string }): Promise<void>
  remove(id: string, perm: MemberPermNames, options?: { notFoundErr?: string }): Promise<void>
}

export interface ExtendedUser extends User {
  chatPerm: MemberPermsCtx
  eventPerm: MemberPermsCtx
  groupPerm: MemberPermsCtx
}

export interface UserContext {
  user: ExtendedUser
}
