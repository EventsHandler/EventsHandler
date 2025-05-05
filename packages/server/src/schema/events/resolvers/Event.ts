import type { EventResolvers } from './../../types.generated.js'
export const Event: EventResolvers = {
  /* Implement Event resolver logic here */
  announces: async (_parent, _arg, _ctx) => {
    /* Event.announces resolver is required because Event.announces exists but EventMapper.announces does not */
  },
  creator: async (_parent, _arg, _ctx) => {
    /* Event.creator resolver is required because Event.creator exists but EventMapper.creator does not */
  },
  participants: async (_parent, _arg, _ctx) => {
    /* Event.participants resolver is required because Event.participants exists but EventMapper.participants does not */
  },
}
