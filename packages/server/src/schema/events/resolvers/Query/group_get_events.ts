import { prisma } from '../../../../prisma.js'
import type { QueryResolvers } from './../../../types.generated.js'
export const group_get_events: NonNullable<QueryResolvers['group_get_events']> = async (_parent, { groupId }, _ctx) => {
  const group = await prisma.group.findUnique({
    where: {
      id: groupId
    },
    include: {
      linkedEvents: true
    }
  })
  if(!group){
    throw new Error('Acest grup nu există.')
  }
  return group.linkedEvents
}
