import { prisma } from '../../../prisma.js'
import type { UserResolvers } from './../../types.generated.js'
export const User: UserResolvers = {
  myRates: async (_parent, _arg, _ctx) => {
    return await prisma.rateing.findMany({
      where: {
        toId: _parent.id as string
      }
    })
  },
  createdEvents: async (_parent, _arg, _ctx) => {
    return await prisma.event.findMany({
      where: {
        userId: _parent.id as string
      }
    })
  }
}
