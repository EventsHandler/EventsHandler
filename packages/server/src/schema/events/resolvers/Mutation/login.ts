import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const login: NonNullable<MutationResolvers['login']> = async (_parent, { email }, _ctx) => {
  const user = await prisma.user.findUnique({
    where: { email },
  })
  if(!user) {
    throw new Error("User not found")
  }
  return user
}
