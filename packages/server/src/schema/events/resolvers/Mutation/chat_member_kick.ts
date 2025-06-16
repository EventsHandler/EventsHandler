import type { MutationResolvers } from './../../../types.generated.js'
import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../utils/permissions/member.js'
import { inbox } from '../../../utils/inbox.js'
export const chat_member_kick: NonNullable<MutationResolvers['chat_member_kick']> = async (_parent, { userId, chatId }, _ctx) => {
  await memberPerms.require({userId: _ctx.user.id, entityId: chatId, perm: "chat:manageMembers", targetId: userId, entityType: "chat"})
  const target = await prisma.chatMember.delete({
    where: {
      userId_chatId: {
        userId, chatId
      }
    },
    include: {
      chat: true
    }
  })
  await inbox.send(userId, "Kick", `Ai fost dat afară din chatul ${target.chat.name} de catre ${_ctx.user.username}`)
  return target
}
