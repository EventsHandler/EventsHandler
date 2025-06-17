import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const group_link_event: NonNullable<MutationResolvers['group_link_event']> = async (_parent, {eventId, groupId}, _ctx) => {
  await _ctx.user.groupPerm.require(groupId, "group:link")
  await _ctx.user.eventPerm.require(eventId, "event:link")
  return await prisma.group.update({
    where: {
      id: groupId
    },
    data: {
      linkedEvents: {
        connect: {
          id: eventId
        }
      }
    }
  })
}
