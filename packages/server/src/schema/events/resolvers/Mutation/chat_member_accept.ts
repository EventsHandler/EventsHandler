import { prisma } from '../../../../prisma.js'
import { inbox } from '../../../utils/inbox.js'
import { memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const chat_member_accept: NonNullable<MutationResolvers['chat_member_accept']> = async (_parent, { userId, chatId }, _ctx) => {
  await memberPerms.require({userId: _ctx.user.id, entityId: chatId, perm: "chat:manageMembers", entityType: "chat"})
  const target = await prisma.chatMember.update({
    where: {
      userId_chatId: {
        userId, chatId
      }
    },
    data: {
      accepted: true
    },
    include: {
      chat: true
    }
  })
  await inbox.send(userId, "Acceptat", `Ai fost acceptat în chatul ${target.chat.name}`)
  return target
}
