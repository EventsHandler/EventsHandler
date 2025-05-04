import { createYoga, createSchema } from 'graphql-yoga'
import { createServer } from 'http'
import { typeDefs } from './schema/typeDefs.generated'
import { resolvers } from './schema/resolvers.generated'
import { User } from './generated/prisma'
import { prisma } from './prisma'

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
  }
})
const server = createServer(yoga)
server.listen(process.env.PORT || 3000)
