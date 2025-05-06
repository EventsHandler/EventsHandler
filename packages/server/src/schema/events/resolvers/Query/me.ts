import { prisma } from '../../../../prisma.js'
import type { QueryResolvers } from './../../../types.generated.js'
export const me: NonNullable<QueryResolvers['me']> = async (_parent, _arg, _ctx) => {
  return await prisma.user.findUnique({
    where: {
      id: _ctx.user.id
    }
  })
}
