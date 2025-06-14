import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const event_link_chat: NonNullable<MutationResolvers['event_link_chat']> = async (_parent, { chatId, eventId }, _ctx) => {
  await memberPerms.require(_ctx.user.id, eventId, "event:link")
  await memberPerms.require(_ctx.user.id, chatId, "chat:link")
  return await prisma.event.update({
    where: {
      id: eventId
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
