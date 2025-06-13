import type { QueryResolvers } from './../../../types.generated.js'
import { prisma } from '../../../../prisma.js'
export const chat_get_as_member: NonNullable<QueryResolvers['chat_get_as_member']> = async (_parent, _arg, _ctx) => {
  const meMember = await prisma.chatMember.findMany({
    where: {
      userId: _ctx.user.id,
    },
    include: {
      chat: true,
    },
  })
  return meMember.map(m => m.chat)
}
