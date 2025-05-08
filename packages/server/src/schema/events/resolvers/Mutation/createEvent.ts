import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
import path from 'path'
import { mkdir } from 'fs/promises'
import fs from 'fs'

export const createEvent: NonNullable<MutationResolvers['createEvent']> = async (_parent, { title, description, date, address, categoryName, image }, _ctx) => {
  if (!_ctx.user) {
    throw new Error("Unauthorised")
  }

  if (!title || title.length < 3) {
    throw new Error("Title must be at least 3 characters long")
  }

  if (!description || description.length < 10) {
    throw new Error("Description must be at least 10 characters long")
  }

  const eventDate = new Date(date)
  const today = new Date()
  if (eventDate < today) {
    throw new Error("Event date cannot be in the past")
  }

  if (!address || address.length < 3) {
    throw new Error("Address must be at least 3 characters long")
  }

  if (!categoryName) {
    throw new Error("Category is required")
  }

  const existingCategory = await prisma.category.findFirst({
    where: { name: categoryName }
  })
  if (!existingCategory) {
    throw new Error("Invalid category")
  }

  if (!image) {
    throw new Error("Image is required")
  }

  const { createReadStream, filename, mimetype } = await image
  const uploadDir = path.resolve(process.cwd(), 'uploads')
  await mkdir(uploadDir, { recursive: true })
  const uniqueFilename = `${Date.now()}-${filename}`
  const filePath = path.join(uploadDir, uniqueFilename)
  const stream = createReadStream()
  const out = fs.createWriteStream(filePath)
  stream.pipe(out)

  return await prisma.event.create({
    data: {
      title,
      description,
      image: uniqueFilename,
      date,
      address,
      userId: _ctx.user.id,
      categoryId: existingCategory.id
    }
  })
}
