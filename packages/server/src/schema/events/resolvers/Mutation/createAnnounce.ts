import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'

export const createAnnounce: NonNullable<MutationResolvers['createAnnounce']> = async (
    _parent,
    { eventId, title, description },
    _ctx
) => {
    if (!_ctx.user) {
        throw new Error("Unauthorized")
    }

    const event = await prisma.event.findUnique({
        where: { id: eventId }
    })

    if (!event) {
        throw new Error("Event not found")
    }

    if (event.ownerId !== _ctx.user.id) {
        throw new Error("Only event creator can create announces")
    }

    return await prisma.announce.create({
        data: {
            title,
            description,
            eventId
        },
        include: {
            event: true
        }
    })
} 