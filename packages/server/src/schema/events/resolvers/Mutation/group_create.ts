import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const group_create: NonNullable<MutationResolvers['group_create']> = async (_parent, _arg, _ctx) => {
  return await prisma.group.create({
    data: {
      name: _arg.name,
      ownerId: _ctx.user.id,
      defaultPermissions: memberPerms.default
    }
  })
}
