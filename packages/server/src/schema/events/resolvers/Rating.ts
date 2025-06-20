import { prisma } from '../../../prisma.js'
import type { RatingResolvers } from './../../types.generated.js'
export const Rating: RatingResolvers = {
  rated: async (_parent, _arg, _ctx) => {
    const rated = await prisma.user.findUnique({
      where: {
        id: String(_parent.ratedId)
      }
    })
    return rated
  },
  rater: async (_parent, _arg, _ctx) => {
    const rater = await prisma.user.findUnique({
      where: {
        id: String(_parent.raterId)
      }
    })
    return rater
  }  
}