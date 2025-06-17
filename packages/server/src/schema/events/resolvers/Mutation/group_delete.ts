import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const group_delete: NonNullable<MutationResolvers['group_delete']> = async (_parent, _arg, _ctx) => {
  await _ctx.user.groupPerm.require(_arg.id, "owner")
  return await prisma.group.delete({
    where:{
      id: _arg.id
    }
  })
}
