import { prisma } from '../../../../prisma.js'
import { MemberPermNames, memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const chat_member_perm_remove: NonNullable<MutationResolvers['chat_member_perm_remove']> = async ( _parent, { userId, chatId, permission }, _ctx,) => {
  await memberPerms.require({userId: _ctx.user.id, entityId: chatId, perm: "chat:manageMembers", targetId: userId, entityType: "chat"})
  if(memberPerms.isValidPerm(permission)) {
    await memberPerms.remove({ entityId: chatId, userId, entityType: "chat", perm: permission as MemberPermNames })
    return true
  }
  return false
}
