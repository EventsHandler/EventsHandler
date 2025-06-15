import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const event_member_accept: NonNullable<MutationResolvers['event_member_accept']> = async ( _parent, { eventId, userId }, _ctx,) => {
  await memberPerms.require(_ctx.user.id, eventId, "event:manageMembers")
  return await prisma.eventMember.update({
    where: {
      userId_eventId: {
        userId, eventId
      }
    },
    data: {
      accepted: true
    }
  })
}
