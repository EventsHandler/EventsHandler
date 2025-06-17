import { MemberPermNames, memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const group_member_perm_remove: NonNullable<MutationResolvers['group_member_perm_remove']> = async ( _parent, { userId, groupId, permission }, _ctx, ) => {
  await memberPerms.require({userId: _ctx.user.id, entityId: groupId, perm: "group:manageMembers", targetId: userId, entityType: "group"})
  if(memberPerms.isValidPerm(permission)) {
    await memberPerms.remove({ entityId: groupId, userId, entityType: "group", perm: permission as MemberPermNames })
    return true
  }
  return false
}
