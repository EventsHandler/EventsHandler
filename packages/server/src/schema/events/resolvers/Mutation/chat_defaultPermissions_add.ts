import { prisma } from '../../../../prisma.js'
import { MemberPermNames, memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const chat_defaultPermissions_add: NonNullable<MutationResolvers['chat_defaultPermissions_add']> = async ( _parent, { chatId, permission }, _ctx) => {
  await memberPerms.require({userId: _ctx.user.id, entityId: chatId, perm: "chat:manageMembers", entityType: "chat"})
  if(memberPerms.isValidPerm(permission)){ 
    await prisma.chat.update({
      where: {
        id: chatId
      },
      data: {
        defaultPermissions: permission as MemberPermNames
      }
    })
    return true
  }
  return false
}
