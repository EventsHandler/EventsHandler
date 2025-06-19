import type { MutationResolvers } from './../../../types.generated.js'
import { prisma } from '../../../../prisma.js'
import { appPerms } from '../../../utils/permissions/app.js'
export const user_register: NonNullable<MutationResolvers['user_register']> = async (_parent, _arg, _ctx) => {
  return await prisma.user.create({
    data: {
      username: _arg.username,
      email: _arg.email,
      password: _arg.password,
      appPermissions: appPerms.default
    },
  })
}
