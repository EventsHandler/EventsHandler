import { prisma } from '../../../prisma.js'
import type { GroupResolvers } from './../../types.generated.js'
export const Group: GroupResolvers = {
  owner: async (_parent, _arg, _ctx) => {
    return await prisma.user.findUnique({
      where: {
        id: String(_parent.ownerId)
      }
    })
  },
  members: async (_parent, _arg, _ctx) => {
    return await prisma.groupMember.findMany({
      where: {
        groupId: String(_parent.id)
      }
    })
  },
  linkedEvents: async (_parent, _arg, _ctx) => {
    const group = await prisma.group.findUnique({
      where: {
        id: String(_parent.id)
      }, 
      include: {
        linkedEvents: true
      }
    })
    return group?.linkedEvents
  },
  linkedChats: async (_parent, _arg, _ctx) => {
    const group = await prisma.group.findUnique({
      where: {
        id: String(_parent.id)
      },
      include: {
        linkedChats: true
      }
    })
    return group?.linkedChats
  }
}
