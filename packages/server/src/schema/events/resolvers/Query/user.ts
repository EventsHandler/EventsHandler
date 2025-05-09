import { prisma } from '../../../../prisma.js'
import type { QueryResolvers } from './../../../types.generated.js'
export const user: NonNullable<QueryResolvers['user']> = async (_parent, _arg, _ctx) => {
  return await prisma.user.findUnique({
    where: {
      id: _arg.userId
    }
  })
}
