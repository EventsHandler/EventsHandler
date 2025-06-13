import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const chat_delete: NonNullable<MutationResolvers['chat_delete']> = async (_parent, _arg, _ctx) => {
  await memberPerms.require(_ctx.user.id, _arg.id, "owner")
  return await prisma.chat.delete({
    where: {
      id: _arg.id
    }
  })
}
