import { prisma } from '../../../../prisma.js'
import type { QueryResolvers } from './../../../types.generated.js'
export const group_get_members: NonNullable<QueryResolvers['group_get_members']> = async (_parent, { groupId }, _ctx) => {
  return await prisma.groupMember.findMany({
    where: {
      id: groupId
    }
  })
}
