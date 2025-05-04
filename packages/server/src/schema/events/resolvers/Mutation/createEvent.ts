import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const createEvent: NonNullable<MutationResolvers['createEvent']> = async (_parent, { title, description }, _ctx) => {
  if(!_ctx.user) {
    throw new Error("Unauthorised")
  }
  return await prisma.event.create({
    data: {
      title, description,
      creator: {
        connect: { id: _ctx.user.id }
      }
    }
  })
}
