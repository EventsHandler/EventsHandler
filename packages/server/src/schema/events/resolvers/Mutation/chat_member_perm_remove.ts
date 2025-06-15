import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const chat_member_perm_remove: NonNullable<MutationResolvers['chat_member_perm_remove']> = async ( _parent, { userId, chatId, permission }, _ctx,) => {
  await memberPerms.require(_ctx.user.id, chatId, "chat:manageMembers", userId)
  return await prisma.chatMember.update({
    where: {
      userId_chatId: {
        userId, chatId
      }
    },
    data: {
      // @TODO the logic of permissions
      permissions: 0
    }
  })
}
