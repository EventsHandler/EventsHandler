import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'

export const createEvent: NonNullable<MutationResolvers['createEvent']> = async (
  _parent,
  { title, description, image, date, address, categoryName },
  _ctx
) => {
  // Temporarily removed auth check for testing
  // if (!_ctx.user) {
  //   throw new Error("Unauthorized")
  // }

  // Find or create category
  const category = await prisma.category.findUnique({
    where: { name: categoryName }
  })

  if (!category) {
    throw new Error(`Category "${categoryName}" not found`)
  }

  // Create a test user if it doesn't exist
  const testUser = await prisma.user.upsert({
    where: { email: "test@example.com" },
    update: {},
    create: {
      email: "test@example.com",
      username: "testuser",
      password: "testpassword"
    }
  })

  const event = await prisma.event.create({
    data: {
      title,
      description,
      image,
      date: new Date(date),
      address,
      userId: testUser.id,
      categoryId: category.id
    }
  })

  const createdEvent = await prisma.event.findUnique({
    where: { id: event.id },
    include: {
      creator: true,
      category: true
    }
  })

  if (!createdEvent) {
    throw new Error("Failed to create event")
  }

  return createdEvent
}
