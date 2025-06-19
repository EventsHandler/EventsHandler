import type { MutationResolvers } from './../../../types.generated.js'
import { prisma } from '../../../../prisma.js'
export const user_login: NonNullable<MutationResolvers['user_login']> = async (_parent, _arg, _ctx) => {
  const user = await prisma.user.findUnique({
    where: {
      email: _arg.email,
      password: _arg.password,
    },
  })
  if (!user) {
    throw new Error(`Nu exista acest utilizator`)
  }
  return user
}
