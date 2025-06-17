import { MemberPerm, MemberPermNames, memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const group_member_perm_add: NonNullable<MutationResolvers['group_member_perm_add']> = async ( _parent, { groupId, userId, permission}, _ctx,) => {
 await memberPerms.require({userId: _ctx.user.id, entityId: groupId, perm: "group:manageMembers", targetId: userId, entityType: "group"}) 
 if(memberPerms.isValidPerm(permission)) {
  return await memberPerms.add({ entityId: groupId, userId, entityType: "group", perm: permission as MemberPermNames})
 }
 return false
}
