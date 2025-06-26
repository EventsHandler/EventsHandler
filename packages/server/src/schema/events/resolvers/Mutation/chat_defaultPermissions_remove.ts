import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const chat_defaultPermissions_remove: NonNullable<MutationResolvers['chat_defaultPermissions_remove']> = async (
  _parent,
  {chatId, permission},
  _ctx,
) => {
  await memberPerms.require({userId: _ctx.user.id, entityId: chatId, perm: "chat:manageMembers", entityType: "chat"})
  if(memberPerms.isValidPerm(permission)){
    await defaultPer.remove({
      
    })
  }
}
