import { prisma } from '../../../../prisma.js'
import type { QueryResolvers } from './../../../types.generated.js'
export const users: NonNullable<QueryResolvers['users']> = async (_parent, _arg, _ctx) => {
  return await prisma.user.findMany({
    include: {
      eventsCreated: true
    }
  })
}
