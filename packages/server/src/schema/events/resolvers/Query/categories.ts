import { prisma } from '../../../../prisma.js'
import type { QueryResolvers } from './../../../types.generated.js'

export const categories: NonNullable<QueryResolvers['categories']> = async (_parent, _args, _ctx) => {
    return await prisma.category.findMany()
} 