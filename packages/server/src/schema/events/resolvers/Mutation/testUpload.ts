import type { MutationResolvers } from './../../../types.generated.js'
export const testUpload: NonNullable<MutationResolvers['testUpload']> = async (_parent, { file }, _ctx) => {
  // const { createReadStream, filename, mimetype, encoding } = await file;
  // const stream = createReadStream();
  // const path = `@/uploads/${filename}`;
  // const out = require('fs').createWriteStream(path);
  // stream.pipe(out);
  // return `Fișierul ${filename} a fost încărcat cu succes!`;
  console.log(file)
  return "aaa"
}
