import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const event_delete: NonNullable<MutationResolvers['event_delete']> = async (_parent, { id }, _ctx) => {
  await memberPerms.require(id, _ctx.user.id, "owner")
  return await prisma.event.delete({
    where: {
      id
    }
  })
}
