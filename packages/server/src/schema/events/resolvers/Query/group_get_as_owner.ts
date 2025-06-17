import { prisma } from '../../../../prisma.js'
import type { QueryResolvers } from './../../../types.generated.js'
export const group_get_as_owner: NonNullable<QueryResolvers['group_get_as_owner']> = async (_parent, _arg, _ctx) => {
  // const ownedGroups = await prisma.groupMember.findMany({
  //     where: {
  //       userId: _ctx.user.id
  //     },
  //     include: {
  //       group: true
  //     }
  //   })
  //   return ownedGroups.map( o => o.group)
  return null!
}
