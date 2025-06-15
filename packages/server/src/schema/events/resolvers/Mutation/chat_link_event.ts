import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const chat_link_event: NonNullable<MutationResolvers['chat_link_event']> = async (_parent, { chatId, eventId }, _ctx) => {
  await memberPerms.require(_ctx.user.id, chatId, "chat:link")
  await memberPerms.require(_ctx.user.id, eventId, "event:link")
  return await prisma.chat.update({
    where: {
      id: chatId
    },
    data: {
      linkedEvents: {
        connect: {
          id: eventId
        }
      }
    }
  })
}
