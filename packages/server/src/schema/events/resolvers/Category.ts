import { prisma } from '../../../prisma.js'
import type { CategoryResolvers } from './../../types.generated.js'
export const Category: CategoryResolvers = {
  events: async (_parent, _arg, _ctx) => {
    const category = await prisma.category.findUnique({
      where: {
        name: _parent.name,
      },
      include: {
        events: true,
      },
    })

    if (!category?.events) {
      throw new Error('Category not found')
    }

    return category.events
  },
}
