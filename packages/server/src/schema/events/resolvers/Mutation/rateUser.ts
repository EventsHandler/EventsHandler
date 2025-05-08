import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const rateUser: NonNullable<MutationResolvers['rateUser']> = async (_parent, { fromId, toId, rate }, _ctx) => {
  let exist = await prisma.rateing.findFirst({
    where: { fromId, toId }
  })
  if(exist) {
    await prisma.rateing.updateMany({
      where: { fromId, toId },
      data: { rate }
    })
  } else {
    await prisma.rateing.create({
      data: {
        fromId, toId, rate
      }
    })
  }
  return null
}
