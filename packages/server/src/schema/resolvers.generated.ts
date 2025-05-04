/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated.js'
import { events as Query_events } from './events/resolvers/Query/events.js'
import { createEvent as Mutation_createEvent } from './events/resolvers/Mutation/createEvent.js'
import { login as Mutation_login } from './events/resolvers/Mutation/login.js'
import { register as Mutation_register } from './events/resolvers/Mutation/register.js'
import { Event } from './events/resolvers/Event.js'
import { User } from './events/resolvers/User.js'
import { DateTime } from './events/resolvers/DateTime.js'
export const resolvers: Resolvers = {
  Query: { events: Query_events },
  Mutation: { createEvent: Mutation_createEvent, login: Mutation_login, register: Mutation_register },

  Event: Event,
  User: User,
  DateTime: DateTime,
}
