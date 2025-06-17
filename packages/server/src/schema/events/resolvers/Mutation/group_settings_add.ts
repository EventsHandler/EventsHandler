import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const group_settings_add: NonNullable<MutationResolvers['group_settings_add']> = async (_parent, { groupId }, _ctx) => {
  await memberPerms.require({userId: _ctx.user.id, entityId: groupId, perm: "group:manager", entityType: "group"})
  return await prisma.group.update({
    where: {
      id: groupId
    },
    data: {
      // @TODO the logic of settings
      settings: 0
    }
  })
}
