import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const deleteEvent: NonNullable<MutationResolvers['deleteEvent']> = async (_parent, { eventId }, _ctx) => {
  return await prisma.event.delete({
    where: {
      id: eventId
    }
  })
}
