import { prisma } from '../../../../prisma.js'
import type { QueryResolvers } from './../../../types.generated.js'
export const group_get_as_member: NonNullable<QueryResolvers['group_get_as_member']> = async (_parent, _arg, _ctx) => {
  const meMember = await prisma.groupMember.findMany({
    where: {
      userId: _ctx.user.id
    },
    include: {
      group: true
    }
  })
  return meMember.map( m => m.group)
}
