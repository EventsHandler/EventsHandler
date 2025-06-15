import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const chat_link_event: NonNullable<MutationResolvers['chat_link_event']> = async (_parent, { chatId, eventId }, _ctx) => {
  await _ctx.user.chatPerm.require(chatId, "chat:link")
  await _ctx.user.eventPerm.require(eventId, "event:link")
  return await prisma.chat.update({
    where: {
      id: chatId
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
