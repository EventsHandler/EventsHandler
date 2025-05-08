import { prisma } from '../../../prisma.js'
import type { UserResolvers } from './../../types.generated.js'
export const User: UserResolvers = {
  myRates: async (_parent, _arg, _ctx) => {
    return await prisma.rateing.findMany({
      where: {
        toId: _parent.id as string
      }
    })
  }
}
