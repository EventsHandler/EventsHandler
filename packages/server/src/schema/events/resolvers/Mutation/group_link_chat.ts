import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const group_link_chat: NonNullable<MutationResolvers['group_link_chat']> = async (_parent, {chatId, groupId}, _ctx) => {
  await _ctx.user.groupPerm.require( groupId, "group:link")
  await _ctx.user.chatPerm.require(chatId, "chat:link")
  return await prisma.group.update({
    where: {
      id: groupId,
    },
    data: {
      linkedChats: {
        connect: {
          id: chatId
        }
      }
    }
  })
}
