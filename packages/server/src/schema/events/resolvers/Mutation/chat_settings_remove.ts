import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const chat_settings_remove: NonNullable<MutationResolvers['chat_settings_remove']> = async ( _parent, { chatId }, _ctx,) => {
  await memberPerms.require({userId: _ctx.user.id, entityId: chatId, perm: "chat:manager", entityType: "chat"})
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
