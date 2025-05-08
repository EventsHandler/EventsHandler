import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const comment: NonNullable<MutationResolvers['comment']> = async (_parent, { fromId, eventId, comment }, _ctx) => {
  return await prisma.comment.create({
    data: {
      fromId, eventId, comment
    },
    include: {
      from: true,
      event: true
    }
  })
}
