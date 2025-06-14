import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const event_link_group: NonNullable<MutationResolvers['event_link_group']> = async (_parent, { eventId, groupId }, _ctx) => {
  await memberPerms.require(_ctx.user.id, eventId, "event:link")
  // TODO
  // await memberPerms.require(_ctx.user.id, groupId, "group:link")
  return await prisma.event.update({
    where: {
      id: eventId
    },
    data: {
      linkedGroups: {
        connect: {
          id: groupId
        }
      }
    }
  })
}
