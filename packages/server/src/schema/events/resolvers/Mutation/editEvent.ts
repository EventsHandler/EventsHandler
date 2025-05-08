import type { MutationResolvers } from './../../../types.generated.js'
import path from 'path'
import { mkdir } from 'fs/promises'
import fs from 'fs'
import { prisma } from '../../../../prisma.js'
export const editEvent: NonNullable<MutationResolvers['editEvent']> = async (_parent, { address, categoryName, date, description, title, image, eventId }, _ctx) => {
  if(!_ctx.user) {
    throw new Error('Unauthorized')
  }
  let category = await prisma.category.findUnique({
    where: {
      name: categoryName
    }
  })
  if(!category) category = { id: "", name: "" }
  if(image) {
    const { createReadStream, filename, mimetype } = await image
    const uploadDir = path.resolve(process.cwd(), 'uploads')
    await mkdir(uploadDir, { recursive: true })
    const uniqueFilename = `${Date.now()}-${filename}`
    const filePath = path.join(uploadDir, uniqueFilename)
    const stream = createReadStream()
    const out = fs.createWriteStream(filePath)
    stream.pipe(out)
    return await prisma.event.update({
      where: {
        id: eventId
      },
      data: {
        title,
        description,
        image: uniqueFilename,
        date,
        address,
        categoryId: category.id
      }
    })
  } else {
    return await prisma.event.update({
      where: {
        id: eventId
      },
      data: {
        title,
        description,
        date,
        address,
        categoryId: category.id
      }
    })
  }
}
