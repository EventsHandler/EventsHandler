import { prisma } from '../../../prisma.js'
import type { EventMemberResolvers } from './../../types.generated.js'
export const EventMember: EventMemberResolvers = {
  user: async (_parent, _arg, _ctx) => {
    return await prisma.user.findUnique({
      where: {
        id: String(_parent.userId)
      }
    })
  },
  event: async (_parent, _arg, _ctx) => {
    return await prisma.event.findUnique({
      where: {
        id: String(_parent.eventId)
      }
    })
  }
}