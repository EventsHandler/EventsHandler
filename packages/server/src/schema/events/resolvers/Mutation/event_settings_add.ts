import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const event_settings_add: NonNullable<MutationResolvers['event_settings_add']> = async (_parent, { eventId, setting }, _ctx) => {
  await memberPerms.require(_ctx.user.id, eventId, "event:manager")
  return await prisma.event.update({
    where: {
      id: eventId
    },
    data: {
      // TODO settings add logic
    }
  })
}
