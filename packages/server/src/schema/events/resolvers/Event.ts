import { prisma } from '../../../prisma.js'
import type { EventResolvers } from './../../types.generated.js'
export const Event: EventResolvers = {
  announces: async (_parent, _arg, _ctx) => {
    return await prisma.announce.findMany({
      where: {
        eventId: _parent.id,
      },
    })
  },
  category: async (_parent, _arg, _ctx) => {
    const category = await prisma.category.findUnique({
      where: {
        id: _parent.categoryId,
      },
    })
    if (!category) {
      throw new Error('Nu am gasit categoria.')
    }
    return category
  },
  comments: async (_parent, _arg, _ctx) => {
    return await prisma.comment.findMany({
      where: {
        eventId: _parent.id,
      },
    })
  },
  linkedChats: async (_parent, _arg, _ctx) => {
    const event = await prisma.event.findUnique({
      where: {
        id: _parent.id,
      },
      include: {
        linkedChats: true,
      },
    })
    return event?.linkedChats
  },
  linkedGroups: async (_parent, _arg, _ctx) => {
    const event = await prisma.event.findUnique({
      where: {
        id: _parent.id,
      },
      include: {
        linkedGroups: true,
      },
    })
    return event?.linkedGroups
  },
  members: async (_parent, _arg, _ctx) => {
    return await prisma.eventMember.findMany({
      where: {
        eventId: _parent.id,
      },
    })
  },
  owner: async (_parent, _arg, _ctx) => {
    return await prisma.user.findUnique({
      where: {
        id: _parent.ownerId,
      },
    })
  },
  name: async (_parent, _arg, _ctx) => {
    /* Event.name resolver is required because Event.name exists but EventMapper.name does not */
  },
  defaultPermissions: async (_parent, _arg, _ctx) => {
    /* Event.defaultPermissions resolver is required because Event.defaultPermissions exists but EventMapper.defaultPermissions does not */
  },
}
