import { prisma } from '../../../../prisma'
import type { QueryResolvers } from './../../../types.generated.js'

export const events: NonNullable<QueryResolvers['events']> = async (_parent, _, _ctx) => {
  return await prisma.event.findMany()
}
