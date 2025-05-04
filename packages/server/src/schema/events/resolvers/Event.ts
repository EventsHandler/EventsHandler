import type { EventResolvers } from './../../types.generated.js'
export const Event: EventResolvers = {
  /* Implement Event resolver logic here */
  createdAt: ({ createdAt }, _arg, _ctx) => {
    /* Event.createdAt resolver is required because Event.createdAt and EventMapper.createdAt are not compatible */
    return createdAt
  },
  creator: async (_parent, _arg, _ctx) => {
    /* Event.creator resolver is required because Event.creator exists but EventMapper.creator does not */
  },
  participants: async (_parent, _arg, _ctx) => {
    /* Event.participants resolver is required because Event.participants exists but EventMapper.participants does not */
  },
  description: async (_parent, _arg, _ctx) => {
    /* Event.description resolver is required because Event.description exists but EventMapper.description does not */
  },
  title: async (_parent, _arg, _ctx) => {
    /* Event.title resolver is required because Event.title exists but EventMapper.title does not */
  },
}
