import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const chat_create: NonNullable<MutationResolvers['chat_create']> = async (_parent, { name }, _ctx) => {
  return await prisma.chat.create({
    data: {
      name,
      ownerId: _ctx.user.id
    }
  })
}
