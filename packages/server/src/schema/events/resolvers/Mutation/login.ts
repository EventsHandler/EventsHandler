import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'

export const login: NonNullable<MutationResolvers['login']> = async (_parent, { username, password }, _ctx) => {
  if (!username || username.length < 3) {
    throw new Error("Username must be at least 3 characters long")
  }

  if (!password || password.length < 8) {
    throw new Error("Password must be at least 8 characters long")
  }

  const user = await prisma.user.findFirst({
    where: {
      username,
      password
    },
  })
  if (!user) {
    throw new Error("Invalid username or password")
  }
  return user
}
