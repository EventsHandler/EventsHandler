import { prisma } from '../../../../prisma'
import type { QueryResolvers } from './../../../types.generated.js'

export const events: NonNullable<QueryResolvers['events']> = async (_parent, _, _ctx) => {
  let events = await prisma.event.findMany({
    include: {
      creator: true,
      announces: true,
      participants: true
    }
  })
  return events
}
