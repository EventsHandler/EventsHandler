import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const chat_message_send: NonNullable<MutationResolvers['chat_message_send']> = async (_parent, { chatId, message }, _ctx) => {
  await memberPerms.require({userId: _ctx.user.id, entityId: chatId, perm: "chat:sendMessage", entityType: "chat"})
  return await prisma.message.create({
    data: {
      chatId,
      userId: _ctx.user.id,
      message
    }
  })
}
