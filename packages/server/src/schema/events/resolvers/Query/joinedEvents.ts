import { prisma } from '../../../../prisma.js'
import type { QueryResolvers } from './../../../types.generated.js'
export const joinedEvents: NonNullable<QueryResolvers['joinedEvents']> = async (_parent, _arg, _ctx) => {
  return await prisma.event.findMany({
    where: {
      participants: {
        some: {
          id: _ctx.user.id
        }
      }
    },
    include: {
      creator: true,
      announces: true,
      participants: true
    }
  })
}
