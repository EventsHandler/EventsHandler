import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
import { MemberPermNames, memberPerms } from '../../../utils/permissions/member.js'
export const chat_member_perm_add: NonNullable<MutationResolvers['chat_member_perm_add']> = async ( _parent, { chatId, userId, permission }, _ctx,) => {
  await memberPerms.require({userId: _ctx.user.id, entityId: chatId, perm: "chat:manageMembers", targetId: userId, entityType: "chat"})
  if(memberPerms.isValidPerm(permission)) {
    return await memberPerms.add({ entityId: chatId, userId, entityType: "chat", perm: permission as MemberPermNames })
  }
  return false
}
