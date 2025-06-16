import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const chat_link_group: NonNullable<MutationResolvers['chat_link_group']> = async (_parent, { chatId, groupId }, _ctx) => {
  // await memberPerms.require({useuId: _ctx.user.id, entityId: chatId, perm: "chat:link", entityType: "chat"})
  // @TODO has perm to group side
  // await memberPerms.require(_ctx.user.id, chatId, "group:link")
  await _ctx.user.chatPerm.require(chatId, "chat:link")
  return await prisma.chat.update({
    where: {
      id: chatId
    },
    data: {
      linkedGroups: {
        connect: {
          id: groupId
        }
      }
    }
  })
}
