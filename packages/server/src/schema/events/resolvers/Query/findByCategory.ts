import { prisma } from '../../../../prisma.js'
import type { QueryResolvers } from './../../../types.generated.js'
export const findByCategory: NonNullable<QueryResolvers['findByCategory']> = async (_parent, _arg, _ctx) => {
  const category = await prisma.category.findUnique({
    where: {
      name: _arg.category
    },
    include: {
      events: true
    }
  })
  return category?.events
}
