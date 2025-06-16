import { prisma } from '../../../../prisma.js'
import { inbox } from '../../../utils/inbox.js'
import { memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
export const event_member_kick: NonNullable<MutationResolvers['event_member_kick']> = async (_parent, { eventId, userId }, _ctx) => {
  await memberPerms.require({userId: _ctx.user.id, entityId: eventId, perm: "event:manageMembers", targetId: userId, entityType: "event"})
  const target = await prisma.eventMember.delete({
    where: {
      userId_eventId: {
        userId, eventId
      }
    },
    include: {
      event: true
    }
  })
  await inbox.send(userId, "Kick", `Ai fost dat afară din chatul ${target.event.name} de catre ${_ctx.user.username}`)
  return target
}
