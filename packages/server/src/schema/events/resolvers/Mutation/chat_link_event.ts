import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const chat_link_event: NonNullable<MutationResolvers['chat_link_event']> = async (_parent, { chatId, eventId }, _ctx) => {
  await memberPerms.require(_ctx.user.id, chatId, "chat:link")
  // @TODO permsHas to event side
  // await memberPerms.require(_ctx.user.id, chatId, "event:link")
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
