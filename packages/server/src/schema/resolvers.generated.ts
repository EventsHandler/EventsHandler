/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated.js'
import { test as Query_test } from './events/resolvers/Query/test.js'
import { test as Mutation_test } from './events/resolvers/Mutation/test.js'
import { Announce } from './events/resolvers/Announce.js'
import { Category } from './events/resolvers/Category.js'
import { Chat } from './events/resolvers/Chat.js'
import { ChatMember } from './events/resolvers/ChatMember.js'
import { Comment } from './events/resolvers/Comment.js'
import { Event } from './events/resolvers/Event.js'
import { EventMember } from './events/resolvers/EventMember.js'
import { Group } from './events/resolvers/Group.js'
import { GroupMember } from './events/resolvers/GroupMember.js'
import { Message } from './events/resolvers/Message.js'
import { Rating } from './events/resolvers/Rating.js'
import { User } from './events/resolvers/User.js'
import { DateTime } from './events/resolvers/DateTime.js'
import { Upload } from './events/resolvers/Upload.js'
import { BigIntResolver } from 'graphql-scalars'
export const resolvers: Resolvers = {
  Query: { test: Query_test },
  Mutation: { test: Mutation_test },

  Announce: Announce,
  Category: Category,
  Chat: Chat,
  ChatMember: ChatMember,
  Comment: Comment,
  Event: Event,
  EventMember: EventMember,
  Group: Group,
  GroupMember: GroupMember,
  Message: Message,
  Rating: Rating,
  User: User,
  DateTime: DateTime,
  Upload: Upload,
  BigInt: BigIntResolver,
}
