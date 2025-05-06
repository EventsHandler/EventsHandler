import { prisma } from '../../../../prisma.js'
import type { QueryResolvers } from './../../../types.generated.js'
export const myEvents: NonNullable<QueryResolvers['myEvents']> = async (_parent, _arg, _ctx) => {
  if(!_ctx.user) {
    throw new Error("unauthorized")
  }
  return await prisma.event.findMany({
    where: {
      userId: _ctx.user.id
    },
    include: {
      creator: true,
      announces: true,
      participants: true
    }
  })
}
