import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
import { settings } from '../../../utils/settings/settings.js'
export const event_member_join: NonNullable<MutationResolvers['event_member_join']> = async (_parent, { eventId }, _ctx) => {
  return await prisma.eventMember.create({
    data: {
      userId: _ctx.user.id,
      eventId,
      accepted: await settings.has2(eventId, "event:autojoin"),
      // permissions: @TODO
    }
  })
}
