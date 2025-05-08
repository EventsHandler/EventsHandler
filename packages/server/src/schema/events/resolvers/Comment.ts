import { prisma } from '../../../prisma.js'
import type { CommentResolvers } from './../../types.generated.js'
export const Comment: CommentResolvers = {
  from: async (_parent, _arg, _ctx) => {
    const user = await prisma.user.findUnique({
      where: {
        id: _parent.from.id as string
      },
    })
    if(!user) {
      throw new Error("User not found")
    }
    return user
  },
}
