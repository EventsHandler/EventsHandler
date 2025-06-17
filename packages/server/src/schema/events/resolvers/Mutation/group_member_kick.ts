import { prisma } from '../../../../prisma.js'
import { inbox } from '../../../utils/inbox.js'
import { memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const group_member_kick: NonNullable<MutationResolvers['group_member_kick']> = async (_parent, { groupId, userId }, _ctx) => {
  await memberPerms.require({userId: _ctx.user.id, entityId: groupId, perm: "group:manageMembers", targetId: userId, entityType:"group"})
  const target = await prisma.groupMember.delete({
    where: {
      userId_groupId: {
        userId, groupId
      }
    },
    include: {
      group: true
    }
  })
  await inbox.send(userId, "Kick", `Ați fost dat/dată arafă si grupul ${target.group.id} de către ${_ctx.user.username}`)
  return target
}
