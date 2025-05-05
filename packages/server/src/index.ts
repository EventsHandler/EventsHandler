import { createYoga, createSchema } from 'graphql-yoga'
import { createServer } from 'http'
import { typeDefs } from './schema/typeDefs.generated'
import { resolvers } from './schema/resolvers.generated'
import { User } from './generated/prisma'
import { prisma } from './prisma'
import { graphqlUploadExpress } from 'graphql-upload-ts'

type MyContext = {
  user: User | null
}

const yoga = createYoga({
  schema: createSchema<MyContext>({ typeDefs, resolvers }),
  context: async (req: any): Promise<MyContext> => {
    const token = req.request.headers.get("authorization")?.split(" ")[1]
    if(!token) return { user: null }
    const user = await prisma.user.findUnique({
      where: { email: token }
    })
    return { user }
  },
  plugins: [
    graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 })
  ]
})
const server = createServer(yoga)
server.listen(process.env.PORT || 3000)
