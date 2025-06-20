import { prisma } from '../../../prisma.js'
import type { InboxResolvers } from './../../types.generated.js'
export const Inbox: InboxResolvers = {
  user: async (_parent, _arg, _ctx) => {
    return await prisma.user.findUnique({
      where: {
        id: String(_parent.userId)
      }
    })
  }
}
