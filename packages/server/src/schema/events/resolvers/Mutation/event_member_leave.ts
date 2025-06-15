import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const event_member_leave: NonNullable<MutationResolvers['event_member_leave']> = async (_parent, { eventId }, _ctx) => {
  return await prisma.eventMember.delete({
    where: {
      userId_eventId: {
        eventId, userId: _ctx.user.id
      }
    }
  })
}
