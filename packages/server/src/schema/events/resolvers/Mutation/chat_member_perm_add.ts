import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
import { memberPerms } from '../../../utils/permissions/member.js'
export const chat_member_perm_add: NonNullable<MutationResolvers['chat_member_perm_add']> = async ( _parent, { chatId, userId, permission }, _ctx,) => {
  await memberPerms.require(_ctx.user.id, chatId, "chat:manageMembers", userId)
  return await prisma.chatMember.update({
    where: {
      userId_chatId: {
        userId, chatId
      }
    },
    data: {
      // @TODO permissions logic
      permissions: 0
    }
  })
}
