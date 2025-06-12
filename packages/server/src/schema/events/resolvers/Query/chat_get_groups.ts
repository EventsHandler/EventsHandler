import type { QueryResolvers } from './../../../types.generated.js'
import { prisma } from '../../../../prisma.js'
export const chat_get_groups: NonNullable<QueryResolvers['chat_get_groups']> = async (_parent, { chatId }, _ctx) => {
  const chat = await prisma.chat.findUnique({
    where: {
      id: chatId,
    },
    include: {
      linkedGroups: true,
    },
  })
  if (!chat) {
    throw new Error('Acest chat nu exista.')
  }
  return chat.linkedGroups
}
