import type { EventResolvers } from './../../types.generated.js'
export const Event: EventResolvers = {
  /* Implement Event resolver logic here */
  announces: async (_parent, _arg, _ctx) => {
    /* Event.announces resolver is required because Event.announces exists but EventMapper.announces does not */
  },
  category: async (_parent, _arg, _ctx) => {
    /* Event.category resolver is required because Event.category exists but EventMapper.category does not */
  },
  comments: async (_parent, _arg, _ctx) => {
    /* Event.comments resolver is required because Event.comments exists but EventMapper.comments does not */
  },
  linkedChats: async (_parent, _arg, _ctx) => {
    /* Event.linkedChats resolver is required because Event.linkedChats exists but EventMapper.linkedChats does not */
  },
  linkedGroups: async (_parent, _arg, _ctx) => {
    /* Event.linkedGroups resolver is required because Event.linkedGroups exists but EventMapper.linkedGroups does not */
  },
  members: async (_parent, _arg, _ctx) => {
    /* Event.members resolver is required because Event.members exists but EventMapper.members does not */
  },
  owner: async (_parent, _arg, _ctx) => {
    /* Event.owner resolver is required because Event.owner exists but EventMapper.owner does not */
  },
}
