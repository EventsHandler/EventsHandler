import type { MutationResolvers } from './../../../types.generated.js'
import { settings as sett } from '../../../utils/settings/settings.js'
import { prisma } from '../../../../prisma.js'

import path from 'path'
import { mkdir } from 'fs/promises'
import fs from 'fs'

export const event_create: NonNullable<MutationResolvers['event_create']> = async (_parent, { name, description, address, dateStart, image, basedGroup, dateEnd, settings, categoryId }, _ctx) => {
  if(!settings) settings = sett.default

  const { createReadStream, filename } = await image
  const uploadDir = path.resolve(process.cwd(), "..", 'uploads')
  await mkdir(uploadDir, { recursive: true })
  const uniqueFilename = `${Date.now()}-${filename}`
  const filePath = path.join(uploadDir, uniqueFilename)
  const stream = createReadStream()
  const out = fs.createWriteStream(filePath)
  stream.pipe(out)

  return await prisma.event.create({
    data: {
      name, description, address, dateStart, dateEnd, categoryId, settings,
      image: uniqueFilename,
      ownerId: _ctx.user.id,
      linkedGroups: basedGroup ? { connect: { id: basedGroup } } : undefined
    }
  })
}
