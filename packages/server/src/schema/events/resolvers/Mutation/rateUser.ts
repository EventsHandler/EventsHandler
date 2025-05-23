import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const rateUser: NonNullable<MutationResolvers['rateUser']> = async (_parent, { fromId: raterId, toId: ratedId, rate }, _ctx) => {
  let exist = await prisma.rating.findFirst({
    where: { raterId, ratedId}
  })
  if(exist) {
    await prisma.rating.updateMany({
      where: { raterId, ratedId },
      data: { rate }
    })
  } else {
    await prisma.rating.create({
      data: {
        raterId, ratedId, rate
      }
    })
  }
  return null
}
