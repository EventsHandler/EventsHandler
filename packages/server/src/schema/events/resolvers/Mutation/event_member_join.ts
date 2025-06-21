import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
import { settings } from '../../../utils/settings/settings.js'
import { memberPerms } from '../../../utils/permissions/member.js';
export const event_member_join: NonNullable<MutationResolvers['event_member_join']> = async (_parent, { eventId, groupId }, _ctx) => {
  let permsToUse = memberPerms.default;
   async function addWithPermissions(){ 
    return await prisma.eventMember.create({
      data: {
      userId: _ctx.user.id, eventId,
      accepted: await settings.has2({entityId: eventId, setting: "event:autojoin", entityType: "event"}),
        permissions: permsToUse
      }
    })
  }
  if(!groupId){
    return await addWithPermissions();
  }else{
    const user = await prisma.groupMember.findUnique({
      where: {
        userId_groupId: {
          userId: _ctx.user.id,
          groupId: groupId
        }
      }
    })
    permsToUse = user?.permissions ?? memberPerms.default
    return await addWithPermissions()
  }
}
