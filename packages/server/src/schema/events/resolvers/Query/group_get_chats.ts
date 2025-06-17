import { prisma } from '../../../../prisma.js'
import type { QueryResolvers } from './../../../types.generated.js'
export const group_get_chats: NonNullable<QueryResolvers['group_get_chats']> = async (_parent, { groupId } , _ctx) => {
  const group = await prisma.group.findUnique({
    where: {
      id: groupId
    },
    include: {
      linkedChats: true
    }
  })
  if(!group){
    throw new Error('Acest grup nu există.')
  }
  return group.linkedChats
}
