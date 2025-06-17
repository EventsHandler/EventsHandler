import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const group_member_leave: NonNullable<MutationResolvers['group_member_leave']> = async (_parent, { groupId }, _ctx) => {
  return await prisma.groupMember.delete({
    where: {
      userId_groupId: {
        userId: _ctx.user.id, groupId
      }
    }
  })
}
