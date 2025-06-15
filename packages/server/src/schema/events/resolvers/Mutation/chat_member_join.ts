import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
import { settings } from '../../../utils/settings/settings.js'
export const chat_member_join: NonNullable<MutationResolvers['chat_member_join']> = async (_parent, { chatId }, _ctx) => {
  return await prisma.chatMember.create({
    data: {
      userId: _ctx.user.id,
      chatId,
      accepted: await settings.has2(chatId, "chat:autojoin"),
      // permissions: chat.defaultPerms @TODO
    }
  })
}
