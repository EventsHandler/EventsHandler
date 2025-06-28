/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  BigInt: { input: any; output: any }
  DateTime: { input: any; output: any }
  Upload: { input: any; output: any }
}

export type Announce = {
  __typename?: 'Announce'
  createdAt: Scalars['DateTime']['output']
  description: Scalars['String']['output']
  event?: Maybe<Event>
  eventId: Scalars['ID']['output']
  id: Scalars['ID']['output']
  title: Scalars['String']['output']
}

export type Category = {
  __typename?: 'Category'
  events?: Maybe<Array<Event>>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
}

export type Chat = {
  __typename?: 'Chat'
  id: Scalars['ID']['output']
  linkedEvents?: Maybe<Array<Event>>
  linkedGroups?: Maybe<Array<Group>>
  members?: Maybe<Array<ChatMember>>
  messages?: Maybe<Array<Message>>
  name: Scalars['String']['output']
  owner?: Maybe<User>
  ownerId: Scalars['ID']['output']
  settings: Scalars['BigInt']['output']
}

export type ChatMember = {
  __typename?: 'ChatMember'
  chat?: Maybe<Chat>
  chatId: Scalars['ID']['output']
  createdAt: Scalars['DateTime']['output']
  id: Scalars['ID']['output']
  permissions: Scalars['BigInt']['output']
  user?: Maybe<User>
  userId: Scalars['ID']['output']
}

export type Comment = {
  __typename?: 'Comment'
  comment: Scalars['String']['output']
  event?: Maybe<Event>
  eventId: Scalars['ID']['output']
  id: Scalars['ID']['output']
  user?: Maybe<User>
  userId: Scalars['ID']['output']
}

export type Event = {
  __typename?: 'Event'
  address: Scalars['String']['output']
  announces?: Maybe<Array<Announce>>
  category?: Maybe<Category>
  categoryId: Scalars['ID']['output']
  comments?: Maybe<Array<Comment>>
  createdAt: Scalars['DateTime']['output']
  dateEnd?: Maybe<Scalars['DateTime']['output']>
  dateStart: Scalars['DateTime']['output']
  description: Scalars['String']['output']
  id: Scalars['ID']['output']
  image: Scalars['String']['output']
  linkedChats?: Maybe<Array<Chat>>
  linkedGroups?: Maybe<Array<Group>>
  members?: Maybe<Array<EventMember>>
  name: Scalars['String']['output']
  owner?: Maybe<User>
  ownerId: Scalars['ID']['output']
  settings: Scalars['BigInt']['output']
}

export type EventMember = {
  __typename?: 'EventMember'
  createdAt: Scalars['DateTime']['output']
  event?: Maybe<Event>
  eventId: Scalars['ID']['output']
  id: Scalars['ID']['output']
  permissions: Scalars['BigInt']['output']
  user?: Maybe<User>
  userId: Scalars['ID']['output']
}

export type Group = {
  __typename?: 'Group'
  id: Scalars['ID']['output']
  linkedChats?: Maybe<Array<Chat>>
  linkedEvents?: Maybe<Array<Event>>
  members?: Maybe<Array<GroupMember>>
  name: Scalars['String']['output']
  owner?: Maybe<User>
  ownerId: Scalars['ID']['output']
  settings: Scalars['BigInt']['output']
}

export type GroupMember = {
  __typename?: 'GroupMember'
  createdAt: Scalars['DateTime']['output']
  group?: Maybe<Group>
  groupId: Scalars['ID']['output']
  id: Scalars['ID']['output']
  permissions: Scalars['BigInt']['output']
  user?: Maybe<User>
  userId: Scalars['ID']['output']
}

export type Inbox = {
  __typename?: 'Inbox'
  id: Scalars['ID']['output']
  message: Scalars['String']['output']
  title: Scalars['String']['output']
  user?: Maybe<User>
  userId: Scalars['ID']['output']
}

export type Message = {
  __typename?: 'Message'
  chat?: Maybe<Chat>
  chatId: Scalars['ID']['output']
  id: Scalars['ID']['output']
  message: Scalars['String']['output']
  user?: Maybe<User>
  userId: Scalars['ID']['output']
}

export type Mutation = {
  __typename?: 'Mutation'
  chat_create: Chat
  chat_delete: Chat
  chat_link_event: Chat
  chat_link_group: Chat
  chat_member_accept: ChatMember
  chat_member_join: ChatMember
  chat_member_kick: ChatMember
  chat_member_leave: ChatMember
  chat_member_perm_add: Scalars['Boolean']['output']
  chat_member_perm_remove: Scalars['Boolean']['output']
  chat_message_delete: Message
  chat_message_send: Message
  chat_settings_add: Chat
  chat_settings_remove: Chat
  defaultPermissions_add: Scalars['Boolean']['output']
  defaultPermissions_remove: Scalars['Boolean']['output']
  event_create: Event
  event_delete: Event
  event_link_chat: Event
  event_link_group: Event
  event_member_accept: EventMember
  event_member_join: EventMember
  event_member_kick: EventMember
  event_member_leave: EventMember
  event_member_perm_add: Scalars['Boolean']['output']
  event_member_perm_remove: Scalars['Boolean']['output']
  event_settings_add: Event
  event_settings_remove: Event
  group_create: Group
  group_delete: Group
  group_link_chat: Chat
  group_link_event: Group
  group_member_accept: GroupMember
  group_member_join: GroupMember
  group_member_kick: GroupMember
  group_member_leave: GroupMember
  group_member_perm_add: Scalars['Boolean']['output']
  group_member_perm_remove: Scalars['Boolean']['output']
  group_settings_add: Group
  group_settings_remove: Group
  test?: Maybe<Scalars['String']['output']>
  user_login: User
  user_register: User
}

export type MutationChat_CreateArgs = {
  name: Scalars['String']['input']
}

export type MutationChat_DeleteArgs = {
  id: Scalars['ID']['input']
}

export type MutationChat_Link_EventArgs = {
  chatId: Scalars['ID']['input']
  eventId: Scalars['ID']['input']
}

export type MutationChat_Link_GroupArgs = {
  chatId: Scalars['ID']['input']
  groupId: Scalars['ID']['input']
}

export type MutationChat_Member_AcceptArgs = {
  chatId: Scalars['ID']['input']
  userId: Scalars['ID']['input']
}

export type MutationChat_Member_JoinArgs = {
  chatId: Scalars['ID']['input']
  groupId?: InputMaybe<Scalars['ID']['input']>
}

export type MutationChat_Member_KickArgs = {
  chatId: Scalars['ID']['input']
  userId: Scalars['ID']['input']
}

export type MutationChat_Member_LeaveArgs = {
  chatId: Scalars['ID']['input']
}

export type MutationChat_Member_Perm_AddArgs = {
  chatId: Scalars['ID']['input']
  permission: Scalars['String']['input']
  userId: Scalars['ID']['input']
}

export type MutationChat_Member_Perm_RemoveArgs = {
  chatId: Scalars['ID']['input']
  permission: Scalars['String']['input']
  userId: Scalars['ID']['input']
}

export type MutationChat_Message_DeleteArgs = {
  messageId: Scalars['ID']['input']
}

export type MutationChat_Message_SendArgs = {
  chatId: Scalars['ID']['input']
  message: Scalars['String']['input']
}

export type MutationChat_Settings_AddArgs = {
  chatId: Scalars['ID']['input']
  setting: Scalars['String']['input']
}

export type MutationChat_Settings_RemoveArgs = {
  chatId: Scalars['ID']['input']
  setting: Scalars['String']['input']
}

export type MutationDefaultPermissions_AddArgs = {
  entityId: Scalars['ID']['input']
  entityType: Scalars['String']['input']
  permission: Scalars['String']['input']
}

export type MutationDefaultPermissions_RemoveArgs = {
  entityId: Scalars['ID']['input']
  entityType: Scalars['String']['input']
  permission: Scalars['String']['input']
}

export type MutationEvent_CreateArgs = {
  address: Scalars['String']['input']
  basedGroup?: InputMaybe<Scalars['String']['input']>
  categoryId: Scalars['ID']['input']
  dateEnd?: InputMaybe<Scalars['DateTime']['input']>
  dateStart: Scalars['DateTime']['input']
  description: Scalars['String']['input']
  image: Scalars['Upload']['input']
  name: Scalars['String']['input']
  settings?: InputMaybe<Scalars['BigInt']['input']>
}

export type MutationEvent_DeleteArgs = {
  id: Scalars['ID']['input']
}

export type MutationEvent_Link_ChatArgs = {
  chatId: Scalars['ID']['input']
  eventId: Scalars['ID']['input']
}

export type MutationEvent_Link_GroupArgs = {
  eventId: Scalars['ID']['input']
  groupId: Scalars['ID']['input']
}

export type MutationEvent_Member_AcceptArgs = {
  eventId: Scalars['ID']['input']
  userId: Scalars['ID']['input']
}

export type MutationEvent_Member_JoinArgs = {
  eventId: Scalars['ID']['input']
  groupId?: InputMaybe<Scalars['ID']['input']>
}

export type MutationEvent_Member_KickArgs = {
  eventId: Scalars['ID']['input']
  userId: Scalars['ID']['input']
}

export type MutationEvent_Member_LeaveArgs = {
  eventId: Scalars['ID']['input']
}

export type MutationEvent_Member_Perm_AddArgs = {
  eventId: Scalars['ID']['input']
  permission: Scalars['String']['input']
  userId: Scalars['ID']['input']
}

export type MutationEvent_Member_Perm_RemoveArgs = {
  eventId: Scalars['ID']['input']
  permission: Scalars['String']['input']
  userId: Scalars['ID']['input']
}

export type MutationEvent_Settings_AddArgs = {
  eventId: Scalars['ID']['input']
  setting: Scalars['String']['input']
}

export type MutationEvent_Settings_RemoveArgs = {
  eventId: Scalars['ID']['input']
  setting: Scalars['String']['input']
}

export type MutationGroup_CreateArgs = {
  name: Scalars['String']['input']
}

export type MutationGroup_DeleteArgs = {
  id: Scalars['ID']['input']
}

export type MutationGroup_Link_ChatArgs = {
  chatId: Scalars['ID']['input']
  groupId: Scalars['ID']['input']
}

export type MutationGroup_Link_EventArgs = {
  eventId: Scalars['ID']['input']
  groupId: Scalars['ID']['input']
}

export type MutationGroup_Member_AcceptArgs = {
  groupId: Scalars['ID']['input']
  userId: Scalars['ID']['input']
}

export type MutationGroup_Member_JoinArgs = {
  groupId: Scalars['ID']['input']
}

export type MutationGroup_Member_KickArgs = {
  groupId: Scalars['ID']['input']
  userId: Scalars['ID']['input']
}

export type MutationGroup_Member_LeaveArgs = {
  groupId: Scalars['ID']['input']
}

export type MutationGroup_Member_Perm_AddArgs = {
  groupId: Scalars['ID']['input']
  permission: Scalars['String']['input']
  userId: Scalars['ID']['input']
}

export type MutationGroup_Member_Perm_RemoveArgs = {
  groupId: Scalars['ID']['input']
  permission: Scalars['String']['input']
  userId: Scalars['ID']['input']
}

export type MutationGroup_Settings_AddArgs = {
  groupId: Scalars['ID']['input']
  setting: Scalars['String']['input']
}

export type MutationGroup_Settings_RemoveArgs = {
  groupId: Scalars['ID']['input']
  setting: Scalars['String']['input']
}

export type MutationUser_LoginArgs = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type MutationUser_RegisterArgs = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
  username: Scalars['String']['input']
}

export type Query = {
  __typename?: 'Query'
  chat_get_as_member?: Maybe<Array<Chat>>
  chat_get_as_owner?: Maybe<Array<Chat>>
  chat_get_events?: Maybe<Array<Event>>
  chat_get_groups?: Maybe<Array<Group>>
  chat_get_members?: Maybe<Array<ChatMember>>
  group_get_as_member?: Maybe<Array<Group>>
  group_get_as_owner?: Maybe<Array<Group>>
  group_get_chats?: Maybe<Array<Chat>>
  group_get_events?: Maybe<Array<Event>>
  group_get_members?: Maybe<Array<GroupMember>>
  test?: Maybe<Scalars['String']['output']>
}

export type QueryChat_Get_EventsArgs = {
  chatId: Scalars['ID']['input']
}

export type QueryChat_Get_GroupsArgs = {
  chatId: Scalars['ID']['input']
}

export type QueryChat_Get_MembersArgs = {
  chatId: Scalars['ID']['input']
}

export type QueryGroup_Get_ChatsArgs = {
  groupId: Scalars['ID']['input']
}

export type QueryGroup_Get_EventsArgs = {
  groupId: Scalars['ID']['input']
}

export type QueryGroup_Get_MembersArgs = {
  groupId: Scalars['ID']['input']
}

export type Rating = {
  __typename?: 'Rating'
  id: Scalars['ID']['output']
  rate: Scalars['Int']['output']
  rated?: Maybe<User>
  ratedId: Scalars['ID']['output']
  rater?: Maybe<User>
  raterId: Scalars['ID']['output']
}

export type User = {
  __typename?: 'User'
  appPermissions: Scalars['BigInt']['output']
  authToken?: Maybe<Scalars['String']['output']>
  chats?: Maybe<Array<ChatMember>>
  chatsCreated?: Maybe<Array<Chat>>
  comments?: Maybe<Array<Comment>>
  createdAt: Scalars['DateTime']['output']
  email: Scalars['String']['output']
  events?: Maybe<Array<EventMember>>
  eventsCreated?: Maybe<Array<Event>>
  groups?: Maybe<Array<GroupMember>>
  groupsCreated?: Maybe<Array<Group>>
  id: Scalars['ID']['output']
  inbox?: Maybe<Array<Inbox>>
  messages?: Maybe<Array<Message>>
  password: Scalars['String']['output']
  ratingsGiven?: Maybe<Array<Rating>>
  ratingsReceived?: Maybe<Array<Rating>>
  username: Scalars['String']['output']
}

export type TestMutationVariables = Exact<{ [key: string]: never }>

export type TestMutation = { __typename?: 'Mutation'; test?: string | null }

export type Test2QueryVariables = Exact<{ [key: string]: never }>

export type Test2Query = { __typename?: 'Query'; test?: string | null }

export const TestDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Test' },
      selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'test' } }] },
    },
  ],
} as unknown as DocumentNode<TestMutation, TestMutationVariables>
export const Test2Document = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Test2' },
      selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'test' } }] },
    },
  ],
} as unknown as DocumentNode<Test2Query, Test2QueryVariables>
