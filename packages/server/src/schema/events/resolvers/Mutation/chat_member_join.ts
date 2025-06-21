import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
import { settings } from '../../../utils/settings/settings.js'
import { memberPerms } from '../../../utils/permissions/member.js';
export const chat_member_join: NonNullable<MutationResolvers['chat_member_join']> = async (_parent, { chatId, groupId }, _ctx) => {
let permsToUse = memberPerms.default;
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
