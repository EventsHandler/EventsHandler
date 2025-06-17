/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated.js'
import { chat_get_as_member as Query_chat_get_as_member } from './events/resolvers/Query/chat_get_as_member.js'
import { chat_get_as_owner as Query_chat_get_as_owner } from './events/resolvers/Query/chat_get_as_owner.js'
import { chat_get_events as Query_chat_get_events } from './events/resolvers/Query/chat_get_events.js'
import { chat_get_groups as Query_chat_get_groups } from './events/resolvers/Query/chat_get_groups.js'
import { chat_get_members as Query_chat_get_members } from './events/resolvers/Query/chat_get_members.js'
import { group_get_as_member as Query_group_get_as_member } from './events/resolvers/Query/group_get_as_member.js'
import { group_get_as_owner as Query_group_get_as_owner } from './events/resolvers/Query/group_get_as_owner.js'
import { group_get_chats as Query_group_get_chats } from './events/resolvers/Query/group_get_chats.js'
import { group_get_events as Query_group_get_events } from './events/resolvers/Query/group_get_events.js'
import { group_get_members as Query_group_get_members } from './events/resolvers/Query/group_get_members.js'
import { test as Query_test } from './events/resolvers/Query/test.js'
import { chat_create as Mutation_chat_create } from './events/resolvers/Mutation/chat_create.js'
import { chat_delete as Mutation_chat_delete } from './events/resolvers/Mutation/chat_delete.js'
import { chat_link_event as Mutation_chat_link_event } from './events/resolvers/Mutation/chat_link_event.js'
import { chat_link_group as Mutation_chat_link_group } from './events/resolvers/Mutation/chat_link_group.js'
import { chat_member_accept as Mutation_chat_member_accept } from './events/resolvers/Mutation/chat_member_accept.js'
import { chat_member_join as Mutation_chat_member_join } from './events/resolvers/Mutation/chat_member_join.js'
import { chat_member_kick as Mutation_chat_member_kick } from './events/resolvers/Mutation/chat_member_kick.js'
import { chat_member_leave as Mutation_chat_member_leave } from './events/resolvers/Mutation/chat_member_leave.js'
import { chat_member_perm_add as Mutation_chat_member_perm_add } from './events/resolvers/Mutation/chat_member_perm_add.js'
import { chat_member_perm_remove as Mutation_chat_member_perm_remove } from './events/resolvers/Mutation/chat_member_perm_remove.js'
import { chat_message_delete as Mutation_chat_message_delete } from './events/resolvers/Mutation/chat_message_delete.js'
import { chat_message_send as Mutation_chat_message_send } from './events/resolvers/Mutation/chat_message_send.js'
import { chat_settings_add as Mutation_chat_settings_add } from './events/resolvers/Mutation/chat_settings_add.js'
import { chat_settings_remove as Mutation_chat_settings_remove } from './events/resolvers/Mutation/chat_settings_remove.js'
import { event_create as Mutation_event_create } from './events/resolvers/Mutation/event_create.js'
import { event_delete as Mutation_event_delete } from './events/resolvers/Mutation/event_delete.js'
import { event_link_chat as Mutation_event_link_chat } from './events/resolvers/Mutation/event_link_chat.js'
import { event_link_group as Mutation_event_link_group } from './events/resolvers/Mutation/event_link_group.js'
import { event_member_accept as Mutation_event_member_accept } from './events/resolvers/Mutation/event_member_accept.js'
import { event_member_join as Mutation_event_member_join } from './events/resolvers/Mutation/event_member_join.js'
import { event_member_kick as Mutation_event_member_kick } from './events/resolvers/Mutation/event_member_kick.js'
import { event_member_leave as Mutation_event_member_leave } from './events/resolvers/Mutation/event_member_leave.js'
import { event_member_perm_add as Mutation_event_member_perm_add } from './events/resolvers/Mutation/event_member_perm_add.js'
import { event_member_perm_remove as Mutation_event_member_perm_remove } from './events/resolvers/Mutation/event_member_perm_remove.js'
import { event_settings_add as Mutation_event_settings_add } from './events/resolvers/Mutation/event_settings_add.js'
import { event_settings_remove as Mutation_event_settings_remove } from './events/resolvers/Mutation/event_settings_remove.js'
import { group_create as Mutation_group_create } from './events/resolvers/Mutation/group_create.js'
import { group_delete as Mutation_group_delete } from './events/resolvers/Mutation/group_delete.js'
import { group_link_chat as Mutation_group_link_chat } from './events/resolvers/Mutation/group_link_chat.js'
import { group_link_event as Mutation_group_link_event } from './events/resolvers/Mutation/group_link_event.js'
import { group_member_accept as Mutation_group_member_accept } from './events/resolvers/Mutation/group_member_accept.js'
import { group_member_join as Mutation_group_member_join } from './events/resolvers/Mutation/group_member_join.js'
import { group_member_kick as Mutation_group_member_kick } from './events/resolvers/Mutation/group_member_kick.js'
import { group_member_leave as Mutation_group_member_leave } from './events/resolvers/Mutation/group_member_leave.js'
import { group_member_perm_add as Mutation_group_member_perm_add } from './events/resolvers/Mutation/group_member_perm_add.js'
import { group_member_perm_remove as Mutation_group_member_perm_remove } from './events/resolvers/Mutation/group_member_perm_remove.js'
import { group_settings_add as Mutation_group_settings_add } from './events/resolvers/Mutation/group_settings_add.js'
import { group_settings_remove as Mutation_group_settings_remove } from './events/resolvers/Mutation/group_settings_remove.js'
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
import { Inbox } from './events/resolvers/Inbox.js'
import { Message } from './events/resolvers/Message.js'
import { Rating } from './events/resolvers/Rating.js'
import { User } from './events/resolvers/User.js'
import { DateTime } from './events/resolvers/DateTime.js'
import { Upload } from './events/resolvers/Upload.js'
import { BigIntResolver } from 'graphql-scalars'
export const resolvers: Resolvers = {
  Query: {
    chat_get_as_member: Query_chat_get_as_member,
    chat_get_as_owner: Query_chat_get_as_owner,
    chat_get_events: Query_chat_get_events,
    chat_get_groups: Query_chat_get_groups,
    chat_get_members: Query_chat_get_members,
    group_get_as_member: Query_group_get_as_member,
    group_get_as_owner: Query_group_get_as_owner,
    group_get_chats: Query_group_get_chats,
    group_get_events: Query_group_get_events,
    group_get_members: Query_group_get_members,
    test: Query_test,
  },
  Mutation: {
    chat_create: Mutation_chat_create,
    chat_delete: Mutation_chat_delete,
    chat_link_event: Mutation_chat_link_event,
    chat_link_group: Mutation_chat_link_group,
    chat_member_accept: Mutation_chat_member_accept,
    chat_member_join: Mutation_chat_member_join,
    chat_member_kick: Mutation_chat_member_kick,
    chat_member_leave: Mutation_chat_member_leave,
    chat_member_perm_add: Mutation_chat_member_perm_add,
    chat_member_perm_remove: Mutation_chat_member_perm_remove,
    chat_message_delete: Mutation_chat_message_delete,
    chat_message_send: Mutation_chat_message_send,
    chat_settings_add: Mutation_chat_settings_add,
    chat_settings_remove: Mutation_chat_settings_remove,
    event_create: Mutation_event_create,
    event_delete: Mutation_event_delete,
    event_link_chat: Mutation_event_link_chat,
    event_link_group: Mutation_event_link_group,
    event_member_accept: Mutation_event_member_accept,
    event_member_join: Mutation_event_member_join,
    event_member_kick: Mutation_event_member_kick,
    event_member_leave: Mutation_event_member_leave,
    event_member_perm_add: Mutation_event_member_perm_add,
    event_member_perm_remove: Mutation_event_member_perm_remove,
    event_settings_add: Mutation_event_settings_add,
    event_settings_remove: Mutation_event_settings_remove,
    group_create: Mutation_group_create,
    group_delete: Mutation_group_delete,
    group_link_chat: Mutation_group_link_chat,
    group_link_event: Mutation_group_link_event,
    group_member_accept: Mutation_group_member_accept,
    group_member_join: Mutation_group_member_join,
    group_member_kick: Mutation_group_member_kick,
    group_member_leave: Mutation_group_member_leave,
    group_member_perm_add: Mutation_group_member_perm_add,
    group_member_perm_remove: Mutation_group_member_perm_remove,
    group_settings_add: Mutation_group_settings_add,
    group_settings_remove: Mutation_group_settings_remove,
    test: Mutation_test,
  },

  Announce: Announce,
  Category: Category,
  Chat: Chat,
  ChatMember: ChatMember,
  Comment: Comment,
  Event: Event,
  EventMember: EventMember,
  Group: Group,
  GroupMember: GroupMember,
  Inbox: Inbox,
  Message: Message,
  Rating: Rating,
  User: User,
  DateTime: DateTime,
  Upload: Upload,
  BigInt: BigIntResolver,
}
