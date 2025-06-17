import { prisma } from '../../../../prisma.js'
import { settings } from '../../../utils/settings/settings.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const group_member_join: NonNullable<MutationResolvers['group_member_join']> = async (_parent, { groupId }, _ctx) => {
  return await prisma.groupMember.create({
    data: {
      userId: _ctx.user.id, groupId,
      accepted: await settings.has2(groupId, "group:autojoin")
      // permissions: group.defaultPerms @TODO
    }
  })
}
