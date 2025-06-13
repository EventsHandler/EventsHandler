import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const chat_member_accept: NonNullable<MutationResolvers['chat_member_accept']> = async (_parent, { userId, chatId }, _ctx) => {
  await memberPerms.require(_ctx.user.id, chatId, "chat:manageMembers")
  return await prisma.chatMember.update({
    where: {
      userId_chatId: {
        userId, chatId
      }
    },
    data: {
      accepted: true
    }
  })
}
