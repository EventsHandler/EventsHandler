import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const chat_message_delete: NonNullable<MutationResolvers['chat_message_delete']> = async ( _parent, { messageId: id }, _ctx,) => {
  const message = await prisma.message.findUnique({
    where: {
      id
    },
    include: {
      chat: true,
      user: true
    }
  })
  if(!message) {
    throw new Error("Nu exista acest mesaj.")
  }
  if(!memberPerms.has(_ctx.user.id, message.chat.id, "chat:deleteMessage") && message.user.id !== _ctx.user.id) {
    throw new Error("Nu ai permisiune sa executi aceasta actiune.")
  }
  return await prisma.message.delete({
    where: {
      id 
    }
  })
}
