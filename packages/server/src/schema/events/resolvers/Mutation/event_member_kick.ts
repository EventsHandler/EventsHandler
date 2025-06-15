import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const event_member_kick: NonNullable<MutationResolvers['event_member_kick']> = async (_parent, { eventId, userId }, _ctx) => {
  await memberPerms.require(_ctx.user.id, eventId, "event:manageMembers", userId)
  return await prisma.eventMember.delete({
    where: {
      userId_eventId: {
        userId, eventId
      }
    }
  })
}
