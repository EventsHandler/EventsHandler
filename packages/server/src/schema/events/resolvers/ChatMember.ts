import { prisma } from '../../../prisma.js'
import type { ChatMemberResolvers } from './../../types.generated.js'
export const ChatMember: ChatMemberResolvers = {
  user: async (_parent, _arg, _ctx) => {
    const user = await prisma.user.findUnique({
      where: {
        id: String(_parent.userId)
      }
    })
    return user
  },
  chat: async (_parent, _arg, _ctx) => {
    const chat = await prisma.chat.findUnique({
      where: {
        id: String(_parent.chatId)
      }
    })
    return chat
  }
}
