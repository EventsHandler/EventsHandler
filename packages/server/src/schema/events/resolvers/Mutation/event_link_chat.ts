import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const event_link_chat: NonNullable<MutationResolvers['event_link_chat']> = async (_parent, { chatId, eventId }, _ctx) => {
  await memberPerms.require({userId: _ctx.user.id, entityId: eventId, perm: "event:link", entityType: "event"})
  await memberPerms.require({userId: _ctx.user.id, entityId: chatId, perm: "chat:link", entityType: "event"})
  return await prisma.event.update({
    where: {
      id: eventId
    },
    data: {
      linkedChats: {
        connect: {
          id: chatId
        }
      }
    }
  })
}
