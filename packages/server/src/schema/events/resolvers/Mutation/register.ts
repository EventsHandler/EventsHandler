import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const register: NonNullable<MutationResolvers['register']> = async (_parent, { username, password, email }, _ctx) => {
  const user = await prisma.user.create({
    data: {
      username, password, email
    }
  })
  if(!user) {
    throw new Error("Something went wrong")
  }
  return user
}
