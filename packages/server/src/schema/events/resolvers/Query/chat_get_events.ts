import type { QueryResolvers } from './../../../types.generated.js'
import { prisma } from '../../../../prisma.js'
export const chat_get_events: NonNullable<QueryResolvers['chat_get_events']> = async (_parent, { chatId }, _ctx) => {
  const chat = await prisma.chat.findUnique({
    where: {
      id: chatId,
    },
    include: {
      linkedEvents: true,
    },
  })
  if (!chat) {
    throw new Error('Acest chat nu exista.')
  }
  return chat.linkedEvents
}
