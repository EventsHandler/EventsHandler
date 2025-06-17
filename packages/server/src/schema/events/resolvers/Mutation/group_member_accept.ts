import { prisma } from '../../../../prisma.js'
import { inbox } from '../../../utils/inbox.js'
import { memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const group_member_accept: NonNullable<MutationResolvers['group_member_accept']> = async (_parent, { groupId, userId }, _ctx,) => {
  await memberPerms.require({userId: _ctx.user.id, entityId: groupId, perm: "group:manageMembers", entityType: "group"})
  const target = await prisma.groupMember.update({
    where: {
      userId_groupId: {
        userId, groupId
      }
    },
    data: {
      accepted: true
    },
    include: {
      group: true
    }
  })
  await inbox.send(userId, "Acceptat", `Ați fost acceptat/acceptată în grupul ${target.group.name}`)
  return target
}
