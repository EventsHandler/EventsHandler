import { prisma } from '../../../prisma.js'
import type { AnnounceResolvers } from './../../types.generated.js'
export const Announce: AnnounceResolvers = {
  event: async (_parent, _arg, _ctx) => {
    return await prisma.event.findUnique({
      where: {
        id: String(_parent.eventId)
      }
    })
  }
}
