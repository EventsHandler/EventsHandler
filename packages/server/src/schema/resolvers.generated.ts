/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated.js'
import { event as Query_event } from './events/resolvers/Query/event.js'
import { events as Query_events } from './events/resolvers/Query/events.js'
import { me as Query_me } from './events/resolvers/Query/me.js'
import { myEvents as Query_myEvents } from './events/resolvers/Query/myEvents.js'
import { createEvent as Mutation_createEvent } from './events/resolvers/Mutation/createEvent.js'
import { login as Mutation_login } from './events/resolvers/Mutation/login.js'
import { register as Mutation_register } from './events/resolvers/Mutation/register.js'
import { subscribe as Mutation_subscribe } from './events/resolvers/Mutation/subscribe.js'
import { testUpload as Mutation_testUpload } from './events/resolvers/Mutation/testUpload.js'
import { Announces } from './events/resolvers/Announces.js'
import { Event } from './events/resolvers/Event.js'
import { User } from './events/resolvers/User.js'
import { DateTime } from './events/resolvers/DateTime.js'
import { Upload } from './events/resolvers/Upload.js'
export const resolvers: Resolvers = {
  Query: { event: Query_event, events: Query_events, me: Query_me, myEvents: Query_myEvents },
  Mutation: {
    createEvent: Mutation_createEvent,
    login: Mutation_login,
    register: Mutation_register,
    subscribe: Mutation_subscribe,
    testUpload: Mutation_testUpload,
  },

  Announces: Announces,
  Event: Event,
  User: User,
  DateTime: DateTime,
  Upload: Upload,
}
