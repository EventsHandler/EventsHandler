import { prisma } from '../../../prisma.js'
import type { EventResolvers } from './../../types.generated.js'
export const Event: EventResolvers = {
  /* Implement Event resolver logic here */
  announces: async (_parent, _arg, _ctx) => {
    let event = await prisma.event.findUnique({
      where: {
        id: _parent.id,
      },
      include: {
        announces: true,
      },
    })
    return event?.announces
  },
  creator: async (_parent, _arg, _ctx) => {
    let user = await prisma.user.findUnique({
      where: {
        id: _parent.userId,
      },
    })
    if (!user) {
      throw new Error('Unauthorized')
    }
    return user
  },
  participants: async (_parent, _arg, _ctx) => {
    let event = await prisma.event.findUnique({
      where: {
        id: _parent.id,
      },
      include: {
        participants: true,
      },
    })
    return event?.participants
  },
  category: async (_parent, _arg, _ctx) => {
    const event = await prisma.event.findUnique({
      where: {
        id: _parent.id,
      },
      include: {
        category: true,
      },
    })

    if (!event?.category) {
      throw new Error('Category not found')
    }

    return event.category
  },
}
