import { prisma } from '../../../../prisma.js'
import type { QueryResolvers } from './../../../types.generated.js'
export const me: NonNullable<QueryResolvers['me']> = async (_parent, _arg, _ctx) => {
  return _ctx.user
}
