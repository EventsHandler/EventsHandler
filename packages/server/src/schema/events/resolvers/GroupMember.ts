import { prisma } from '../../../prisma.js'
import type { GroupMemberResolvers } from './../../types.generated.js'
export const GroupMember: GroupMemberResolvers = {
  user: async (_parent, _arg, _ctx) => {
    return await prisma.user.findUnique({
      where: {
        id: String(_parent.userId)
      }
    })
  },
  group: async (_parent, _arg, _ctx) => {
    return await prisma.group.findUnique({
      where: {
        id: String(_parent.groupId)
      }
    })
  }
}