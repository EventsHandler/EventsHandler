import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const unsubscribe: NonNullable<MutationResolvers['unsubscribe']> = async (_parent, { eventId }, _ctx) => {
  if(!_ctx.user) {
    throw new Error("Unauthorized")
  }
  return await prisma.event.update({
    where: {
      id: eventId
    },
    data: {
      members: {
        disconnect: {
          id: _ctx.user.id
        }
      }
    }
  })
}
