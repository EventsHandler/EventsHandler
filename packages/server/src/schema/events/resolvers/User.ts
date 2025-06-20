import { prisma } from '../../../prisma.js'
import type { UserResolvers } from './../../types.generated.js'
export const User: UserResolvers = {
  eventsCreated: async (_parent, _arg, _ctx) => {
    return await prisma.event.findMany({
      where: {
        ownerId: String(_parent.id)
      }
    })
  },
  events: async (_parent, _arg, _ctx) => {
    return await prisma.eventMember.findMany({
      where: {
        userId: String(_parent.id)
      }
    })
  },
  groupsCreated: async (_parent, _arg, _ctx) => {
    return await prisma.group.findMany({
      where: {
        ownerId: String(_parent.id)
      }
    })
  },
  groups: async (_parent, _arg, _ctx) => {
    return await prisma.groupMember.findMany({
      where: {
        userId: String(_parent.id)
      }
    })
  },
  chatsCreated: async (_parent, _arg, _ctx) => {
    return await prisma.chat.findMany({
      where: {
        ownerId: String(_parent.id)
      }
    })
  },
  chats: async (_parent, _arg, _ctx) => {
    return await prisma.chatMember.findMany({
      where: {
        userId: String(_parent.id)
      }
    })
  },
  messages: async (_parent, _arg, _ctx) =>{
    return await prisma.message.findMany({
      where: {
        userId: String(_parent.id)
      }
    })
  },
  comments: async (_parent, _arg, _ctx) => {
    return await prisma.comment.findMany({
      where: {
        userId: String(_parent.id)
      }
    })
  },
  ratingsGiven: async (_parent, _arg, _ctx) => {
    return await prisma.rating.findMany({
      where: {
        raterId: String(_parent.id)
      }
    })
  },
  ratingsReceived: async (_parent, _arg, _ctx) => {
    return await prisma.rating.findMany({
      where: {
        ratedId: String(_parent.id)
      }
    })
  },
  inbox: async (_parent, _arg, _ctx) => {
    return await prisma.inbox.findMany({
      where: {
        userId: String(_parent.id)
      }
    })
  }
}