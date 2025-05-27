import { prisma } from '../../../../prisma.js'
import type { QueryResolvers } from './../../../types.generated.js'
export const myEvents: NonNullable<QueryResolvers['myEvents']> = async (_parent, _arg, _ctx) => {
  if(!_ctx.user) {
    return null
    // throw new Error("unauthorized")
  }
  return await prisma.event.findMany({
    where: {
      ownerId: _ctx.user.id
    },
    include: {
      owner: true,
      announces: true,
      members: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
}
