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
  owner: async (_parent, _arg, _ctx) => {
    let user = await prisma.user.findUnique({
      where: {
        id: _parent.ownerId,
      },
    })
    if (!user) {
      throw new Error('Unauthorized')
    }
    return user
  },
  members: async (_parent, _arg, _ctx) => {
    let event = await prisma.event.findUnique({
      where: {
        id: _parent.id,
      },
      include: {
        members: true,
      },
    })
    return event?.members
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
  comments: async (_parent, _arg, _ctx) => {
    return await prisma.comment.findMany({
      where: {
        eventId: _parent.id,
      },
      include: {
        event: true,
        from: true,
      },
    })
  },
  date: async (_parent, _arg, _ctx) => {
    /* Event.date resolver is required because Event.date exists but EventMapper.date does not */
  },
}
