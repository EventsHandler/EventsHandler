import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const chat_settings_add: NonNullable<MutationResolvers['chat_settings_add']> = async (_parent, { chatId }, _ctx) => {
  await memberPerms.require(_ctx.user.id, chatId, "chat:manager")
  return await prisma.chat.update({
    where: {
      id: chatId
    },
    data: {
      // @TODO the logic of settings
      settings: 0
    }
  })
}
