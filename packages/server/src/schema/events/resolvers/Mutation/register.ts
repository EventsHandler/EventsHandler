import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'

export const register: NonNullable<MutationResolvers['register']> = async (_parent, { email, username, password }, _ctx) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email)) {
    throw new Error("Invalid email format")
  }

  if (!username || username.length < 3) {
    throw new Error("Username must be at least 3 characters long")
  }

  if (!password || password.length < 8) {
    throw new Error("Password must be at least 8 characters long")
  }

  const existingEmail = await prisma.user.findUnique({
    where: { email }
  })
  if (existingEmail) {
    throw new Error("Email already registered")
  }

  const existingUsername = await prisma.user.findFirst({
    where: { username }
  })
  if (existingUsername) {
    throw new Error("Username already taken")
  }

  const user = await prisma.user.create({
    data: {
      email,
      username,
      password
    },
  })

  return user
}
