import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const event_member_perm_remove: NonNullable<MutationResolvers['event_member_perm_remove']> = async ( _parent, { eventId, permission, userId  }, _ctx,) => {
  await memberPerms.require(_ctx.user.id, eventId, "event:manageMembers", userId)
  return await prisma.eventMember.update({
    where: {
      userId_eventId: {
        userId, eventId
      }
    },
    data: {
      // TODO permission give logic
    }
  })
}
