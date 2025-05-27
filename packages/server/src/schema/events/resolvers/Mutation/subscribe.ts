import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const subscribe: NonNullable<MutationResolvers['subscribe']> = async (_parent, { eventId }, _ctx) => {
  if(!_ctx.user) {
    throw new Error("Unauthorized")
  }
  return await prisma.event.update({
    where: {
      id: eventId
    },
    data: {
      members: {
        connect: {
          id: _ctx.user.id
        }
      }
    }
  })
}
