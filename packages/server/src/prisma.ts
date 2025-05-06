import { PrismaClient } from './generated/prisma'

export const prisma = new PrismaClient()

const categories = ["none", "Music", "Art", "Sports", "Technology", "Food", "Education", "Health", "Travel", "Business"]

try {
  categories.forEach(async c => {
    await prisma.category.upsert({
      where: { name: c },
      update: {},
      create: { name: c }
    })
  })
} catch(error) {
  console.error(error)
}