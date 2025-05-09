import { prisma } from '../../../../prisma.js'
import type { QueryResolvers } from './../../../types.generated.js'
export const joinedEvents: NonNullable<QueryResolvers['joinedEvents']> = async (_parent, { userId }, _ctx) => {
  if(!userId) userId = _ctx.user.id
  return await prisma.event.findMany({
    where: {
      participants: {
        some: {
          id: userId
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
