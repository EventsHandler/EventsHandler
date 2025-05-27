import { prisma } from '../../../../prisma.js'
import type { QueryResolvers } from './../../../types.generated.js'
export const event: NonNullable<QueryResolvers['event']> = async (_parent, { eventId }, _ctx) => {
    return await prisma.event.findUnique({
    where: {
      id: eventId
    },
    include: {
      owner: {
        include: {
          ratingsRecieved: true
        }
      },
      announces: true,
      members: true,
      comments: {
        include: {
          from: true
        }
      }
    }
  })
}
