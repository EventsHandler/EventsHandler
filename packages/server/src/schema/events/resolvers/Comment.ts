import { prisma } from '../../../prisma.js'
import type { CommentResolvers } from './../../types.generated.js'
export const Comment: CommentResolvers = {
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
