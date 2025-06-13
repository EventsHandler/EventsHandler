import { _iterSSEMessages } from 'openai/streaming.mjs'
import { prisma } from '../../../prisma.js'
import type { ChatResolvers } from './../../types.generated.js'
export const Chat: ChatResolvers = {
  owner: async (_parent, _arg, _ctx) => {
    return await prisma.user.findUnique({
      where: {
        id: String(_parent.ownerId)
      }
    })
  },
  members: async (_parent, _arg, _ctx) => {
    return await prisma.chatMember.findMany({
      where: {
        chatId: String(_parent.id)
      }
    })
  },
  messages: async (_parent, _arg, _ctx) => {
    return await prisma.message.findMany({
      where: {
        chatId: String(_parent.id)
      }
    })
  },
  linkedEvents: async (_parent, _arg, _ctx) => {
    const chat = await prisma.chat.findUnique({
      where: {
        id: String(_parent.id)
      },
      include: {
        linkedEvents: true
      }
    })
    return chat?.linkedEvents
  },
  linkedGroups: async (_parent, _arg, _ctx) => {
    const chat = await prisma.chat.findUnique({
      where: {
        id: String(_parent.id)
      },
      include: {
        linkedGroups: true
      }
    })
    return chat?.linkedGroups
  }
}
