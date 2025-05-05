import type { MutationResolvers } from './../../../types.generated.js'
import path from 'path';
import fs from 'fs'
export const testUpload: NonNullable<MutationResolvers['testUpload']> = async (_parent, { file }, _ctx) => {
      const { createReadStream, filename, mimetype } = await file
      const uploadDir = path.resolve(process.cwd(), 'uploads')
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true })
      }
      const uniqueFilename = `${Date.now()}-${filename}`
      const filePath = path.join(uploadDir, uniqueFilename)
      const stream = createReadStream()
      const out = fs.createWriteStream(filePath)
      stream.pipe(out)

      return `Fișierul a fost salvat la ${filePath}`
}
