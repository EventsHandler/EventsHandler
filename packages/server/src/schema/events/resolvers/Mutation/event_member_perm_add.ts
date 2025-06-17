import { prisma } from '../../../../prisma.js'
import { MemberPermNames, memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const event_member_perm_add: NonNullable<MutationResolvers['event_member_perm_add']> = async ( _parent, { eventId, permission, userId }, _ctx,) => {
  await memberPerms.require({userId: _ctx.user.id, entityId: eventId, perm: "event:manageMembers", targetId: userId, entityType: "event"})
  if(memberPerms.isValidPerm(permission)) {
    await memberPerms.add({ entityId: eventId, userId, entityType: "event", perm: permission as MemberPermNames })
    return true
  }
  return false
}
