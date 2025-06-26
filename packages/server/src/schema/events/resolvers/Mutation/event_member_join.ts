import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
import { settings } from '../../../utils/settings/settings.js'
import { memberPerms } from '../../../utils/permissions/member.js';
export const event_member_join: NonNullable<MutationResolvers['event_member_join']> = async (_parent, { eventId, groupId }, _ctx) => {
  const event = await prisma.event.findUnique({
    where: {
      id: eventId
    }
  })
  let permsToUse = event?.defaultPermissions;
   async function addWithPermissions(){ 
    return await prisma.eventMember.create({
      data: {
      userId: _ctx.user.id, eventId,
      accepted: await settings.has2({entityId: eventId, setting: "event:autojoin", entityType: "event"}),
      permissions: permsToUse
      }
    })
  };
  const inheritPermissions = await settings.has2({entityId: eventId, setting: "event:inheritPermissions", entityType: "event" }) 
  async function memberJoin() {
    if(!groupId || !inheritPermissions){
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
  const isPrivate = await settings.has2({entityId: eventId,setting: "event:private", entityType: "event"})

  if(isPrivate){
    const event = await prisma.event.findUnique({
      where: {
        id: eventId
      },
      include: {
        linkedGroups: {
          include: {
            members: true
          }
        }
      }
    })
    const isMember = event?.linkedGroups.find(group => group.members.find(member => member.id === _ctx.user.id))
    if(isMember){
      return await memberJoin()
    }else{
      throw new Error(`Nu sunteți membru în nici un grup/`)
    }
  }else{
    return await memberJoin()
  }
}
