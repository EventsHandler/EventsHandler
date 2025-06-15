import { createYoga, createSchema } from 'graphql-yoga'
import { createServer } from 'http'
import { typeDefs } from './schema/typeDefs.generated.js'
import { resolvers } from './schema/resolvers.generated.js'
import { User } from './generated/prisma/index.js'
import { prisma } from './prisma.js'
import express from 'express'
import { graphqlUploadExpress } from 'graphql-upload-ts'
import path from 'path'

import { directiveTransformer, directiveTypeDefs } from './schema/directives/directive.js'
import { ExtendedUser } from './types/context.js'
import { buildUserCtxPerm, memberPerms } from './schema/utils/permissions/member.js'

const app = express()
app.use(graphqlUploadExpress({ maxFileSize: 10_000_000, maxFiles: 5 }))

type MyContext = {
  user: User | null
}

let schema = createSchema<MyContext>({
  typeDefs: [directiveTypeDefs, typeDefs],
  resolvers
})
schema = directiveTransformer(schema)

const yoga = createYoga({
  schema,
  context: async (req: any): Promise<MyContext> => {
    const token = req.request.headers.get('authorization')?.split(' ')[1]
    if (!token) return { user: null }
    const userDb = await prisma.user.findUnique({
      where: { email: token },
    }) as ExtendedUser
    if(userDb) {
      userDb.chatPerm = await buildUserCtxPerm(userDb, 'chat')
      userDb.eventPerm = await buildUserCtxPerm(userDb, 'event')
      userDb.groupPerm = await buildUserCtxPerm(userDb, 'group')
    }
    return { user: userDb }
  },
})

app.use('/uploads', express.static(path.resolve(process.cwd(), 'uploads')))
app.use('/graphql', yoga)

const server = createServer(app)
server.listen(process.env.PORT || 3000)
