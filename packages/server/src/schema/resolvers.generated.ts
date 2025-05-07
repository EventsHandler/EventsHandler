/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated.js'
import { categories as Query_categories } from './events/resolvers/Query/categories.js'
import { event as Query_event } from './events/resolvers/Query/event.js'
import { events as Query_events } from './events/resolvers/Query/events.js'
import { me as Query_me } from './events/resolvers/Query/me.js'
import { myEvents as Query_myEvents } from './events/resolvers/Query/myEvents.js'
import { apiTest as Mutation_apiTest } from './events/resolvers/Mutation/apiTest.js'
import { createAnnounce as Mutation_createAnnounce } from './events/resolvers/Mutation/createAnnounce.js'
import { createEvent as Mutation_createEvent } from './events/resolvers/Mutation/createEvent.js'
import { editEvent as Mutation_editEvent } from './events/resolvers/Mutation/editEvent.js'
import { login as Mutation_login } from './events/resolvers/Mutation/login.js'
import { register as Mutation_register } from './events/resolvers/Mutation/register.js'
import { subscribe as Mutation_subscribe } from './events/resolvers/Mutation/subscribe.js'
import { testUpload as Mutation_testUpload } from './events/resolvers/Mutation/testUpload.js'
import { unsubscribe as Mutation_unsubscribe } from './events/resolvers/Mutation/unsubscribe.js'
import { Announces } from './events/resolvers/Announces.js'
import { Category } from './events/resolvers/Category.js'
import { Event } from './events/resolvers/Event.js'
import { User } from './events/resolvers/User.js'
import { DateTime } from './events/resolvers/DateTime.js'
import { Upload } from './events/resolvers/Upload.js'
export const resolvers: Resolvers = {
  Query: {
    categories: Query_categories,
    event: Query_event,
    events: Query_events,
    me: Query_me,
    myEvents: Query_myEvents,
  },
  Mutation: {
    apiTest: Mutation_apiTest,
    createAnnounce: Mutation_createAnnounce,
    createEvent: Mutation_createEvent,
    editEvent: Mutation_editEvent,
    login: Mutation_login,
    register: Mutation_register,
    subscribe: Mutation_subscribe,
    testUpload: Mutation_testUpload,
    unsubscribe: Mutation_unsubscribe,
  },

  Announces: Announces,
  Category: Category,
  Event: Event,
  User: User,
  DateTime: DateTime,
  Upload: Upload,
}
