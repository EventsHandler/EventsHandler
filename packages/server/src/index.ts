import { createYoga, createSchema } from 'graphql-yoga'
import { createServer } from 'http'
import { typeDefs } from './schema/typeDefs.generated'
import { resolvers } from './schema/resolvers.generated'

type MyContext = {
  foo: string
}

const yoga = createYoga({
  schema: createSchema<MyContext>({ typeDefs, resolvers }),
  context: (): MyContext => {
    // console.log("return some context")
    return { foo: "context" }
  }
})
const server = createServer(yoga)
server.listen(process.env.PORT || 3000)
