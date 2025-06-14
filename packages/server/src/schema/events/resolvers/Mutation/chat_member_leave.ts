import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const chat_member_leave: NonNullable<MutationResolvers['chat_member_leave']> = async (_parent, { chatId }, _ctx) => {
  return await prisma.chatMember.delete({
    where: {
      userId_chatId: {
        userId: _ctx.user.id,
        chatId
      }
    }
  })
}
