import { prisma } from '../../../../prisma.js'
import { memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const event_settings_remove: NonNullable<MutationResolvers['event_settings_remove']> = async ( _parent, { eventId, setting }, _ctx,) => {
  await memberPerms.require({userId: _ctx.user.id, entityId: eventId, perm: "event:manager", entityType: "event"})
  return await prisma.event.update({
    where: {
      id: eventId
    },
    data: {
      // TODO logic remove setting
    }
  })
}
