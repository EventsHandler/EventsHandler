import { prisma } from '../../../prisma.js'
import type { MessageResolvers } from './../../types.generated.js'
export const Message: MessageResolvers = {
   user: async (_parent, _arg, _ctx) => {
      return await prisma.user.findUnique({
        where: {
          id: String(_parent.userId)
        }
      })
    },
    chat: async (_parent, _arg, _ctx) => {
      return await prisma.chat.findUnique({
        where: {
          id: String(_parent.chatId)
        }
      })
    }
}