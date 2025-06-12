import { prisma } from '../../../prisma.js'
import type { CategoryResolvers } from './../../types.generated.js'
export const Category: CategoryResolvers = {
  events: async (_parent, _arg, _ctx) => {
    return await prisma.event.findMany({
      where: {
        categoryId: String(_parent.id)
      }
    })
  }
}
