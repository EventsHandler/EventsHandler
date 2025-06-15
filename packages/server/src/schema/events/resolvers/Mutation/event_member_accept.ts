import { prisma } from '../../../../prisma.js'
import { inbox } from '../../../utils/inbox.js'
import { memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const event_member_accept: NonNullable<MutationResolvers['event_member_accept']> = async ( _parent, { eventId, userId }, _ctx,) => {
  await memberPerms.require({userId: _ctx.user.id, entityId: eventId, perm: "event:manageMembers", entityType: "event"})
  const target = await prisma.eventMember.update({
    where: {
      userId_eventId: {
        userId, eventId
      }
    },
    data: {
      accepted: true
    },
    include: {
      event: true
    }
  })
  await inbox.send(userId, "Acceptat", `Ai fost acceptat în eventul ${target.event.name}`)
  return target
}
