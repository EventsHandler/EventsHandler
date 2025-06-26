import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
import { settings } from '../../../utils/settings/settings.js'
import { memberPerms } from '../../../utils/permissions/member.js';
export const chat_member_join: NonNullable<MutationResolvers['chat_member_join']> = async (_parent, { chatId, groupId }, _ctx) => {
  const chat = await prisma.chat.findUnique({
    where: {
      id: chatId
    }
  })
  let permsToUse = chat?.defaultPermissions;
   async function addWithPermissions(){ 
    return await prisma.chatMember.create({
      data: {
        userId: _ctx.user.id,
        chatId,
        accepted: await settings.has2({entityId: chatId, setting: "chat:autojoin", entityType: "chat"}),
        permissions: permsToUse
      }
    })
  }
  const inheritPermissions = await settings.has2({entityId: chatId, setting: "chat:inheritPermissions", entityType: "chat"})
  async function memberJoin(){
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
   const isPrivate = await settings.has2({entityId: chatId,setting: "chat:private", entityType: "chat"})
  
  if(isPrivate){
    const chat = await prisma.chat.findUnique({
      where: {
        id: chatId
      },
      include: {
        linkedGroups: {
          include: {
            members: true
          }
        }
      }
    })
    const isMember = chat?.linkedGroups.find(group => group.members.find(member => member.id === _ctx.user.id))
    if(isMember){
      return await memberJoin()
    }else{
      throw new Error(`Nu sunteți membru în nici un grup/`)
    }
  }else{
    return await memberJoin()
  }
}
