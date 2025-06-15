import type { MutationResolvers } from './../../../types.generated.js'
import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../permissions/member.js'
export const chat_member_kick: NonNullable<MutationResolvers['chat_member_kick']> = async (_parent, { userId, chatId }, _ctx) => {
  await memberPerms.require(_ctx.user.id, chatId, "chat:manageMembers")
  return await prisma.chatMember.delete({
    where: {
      userId_chatId: {
        userId, chatId
      }
    }
  })
}
