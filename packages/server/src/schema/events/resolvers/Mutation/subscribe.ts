import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const subscribe: NonNullable<MutationResolvers['subscribe']> = async (_parent, { postId }, _ctx) => {
  if(!_ctx.user) {
    throw new Error("Unauthorized")
  }
  return await prisma.event.update({
    where: {
      id: postId
    },
    data: {
      participants: {
        connect: {
          id: _ctx.user.id
        }
      }
    }
  })
}
