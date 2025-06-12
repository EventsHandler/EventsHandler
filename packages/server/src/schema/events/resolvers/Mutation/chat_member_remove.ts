import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const chat_member_remove: NonNullable<MutationResolvers['chat_member_remove']> = async (_parent, { chatId, userId }, _ctx) => {
  await memberPerms.require(_ctx.user.id, chatId, "chat:manageMembers")
  return await prisma.chatMember.delete({
    where: {
      userId_chatId: {
        userId, chatId
      }
    }
  })
}
