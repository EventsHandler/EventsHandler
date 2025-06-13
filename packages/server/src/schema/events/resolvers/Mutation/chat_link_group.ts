import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const chat_link_group: NonNullable<MutationResolvers['chat_link_group']> = async (_parent, { chatId, groupId }, _ctx) => {
  await memberPerms.require(_ctx.user.id, chatId, "chat:link")
  // @TODO has perm to group side
  // await memberPerms.require(_ctx.user.id, chatId, "group:link")
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
