import { prisma } from '../../../../prisma.js'
import type { MutationResolvers } from './../../../types.generated.js'
import path from 'path'
import fs from 'fs'
export const createEvent: NonNullable<MutationResolvers['createEvent']> = async (_parent, { title, description, address }, _ctx) => {
  if(!_ctx.user) {
    throw new Error("Unauthorised")
  }
  // const { createReadStream, filename, mimetype } = await image
  // const uploadDir = path.resolve(process.cwd(), 'uploads')
  // if (!fs.existsSync(uploadDir)) {
  //   fs.mkdirSync(uploadDir, { recursive: true })
  // }
  // const uniqueFilename = `${Date.now()}-${filename}`
  // const filePath = path.join(uploadDir, uniqueFilename)
  // const stream = createReadStream()
  // const out = fs.createWriteStream(filePath)
  // stream.pipe(out)
  // return await prisma.event.create({
  //   data: {
  //     title,
  //     description,
  //     image,
  //     date: new Date(date),
  //     address,
  //     userId: _ctx.user.id,
  //     categoryId: ""
  //   }
  // })
  console.log("MERGE")
  return null!
}
