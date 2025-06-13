import type { QueryResolvers } from './../../../types.generated.js'
import { prisma } from '../../../../prisma.js'
export const chat_get_members: NonNullable<QueryResolvers['chat_get_members']> = async (_parent, { chatId }, _ctx) => {
  return await prisma.chatMember.findMany({
    where: {
      id: chatId,
    },
  })
}
