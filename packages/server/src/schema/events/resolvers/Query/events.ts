import { prisma } from '../../../../prisma.js'
import type { QueryResolvers } from './../../../types.generated.js'

export const events: NonNullable<QueryResolvers['events']> = async (_parent, { category }, _ctx) => {
  if (category) {
    const pCategory = await prisma.category.findUnique({
      where: {
        name: category,
      },
      include: {
        events: true,
      },
    })
    if (pCategory?.events) return pCategory.events
  }
  return await prisma.event.findMany({
    include: {
      creator: true,
      announces: true,
      participants: true,
    },
  })
}
