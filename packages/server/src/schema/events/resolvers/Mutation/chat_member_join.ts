import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
import { settings } from '../../../settings/settings.js'
export const chat_member_join: NonNullable<MutationResolvers['chat_member_join']> = async (_parent, { chatId }, _ctx) => {
  const chat = await prisma.chat.findUnique({
    where: {
      id: chatId
    }
  })
  if(!chat) {
    throw new Error("Acest chat nu exista.")
  }
  return await prisma.chatMember.create({
    data: {
      userId: _ctx.user.id,
      chatId,
      accepted: settings.has(chat, "chat:autojoin"),
      // permissions: chat.defaultPerms @TODO
    }
  })
}
