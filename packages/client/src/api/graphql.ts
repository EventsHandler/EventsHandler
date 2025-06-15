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
  from?: Maybe<User>
  fromId: Scalars['ID']['output']
  id: Scalars['ID']['output']
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
  owner?: Maybe<User>
  ownerId: Scalars['ID']['output']
  settings: Scalars['BigInt']['output']
  title: Scalars['String']['output']
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

export type Message = {
  __typename?: 'Message'
  chat?: Maybe<Chat>
  chatId: Scalars['ID']['output']
  content: Scalars['String']['output']
  id: Scalars['ID']['output']
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
  chat_member_perm_add: ChatMember
  chat_member_perm_remove: ChatMember
  chat_message_delete: Message
  chat_message_send: Message
  chat_settings_add: Chat
  chat_settings_remove: Chat
  event_create: Event
  event_delete: Event
  event_link_chat: Event
  event_link_group: Event
  event_member_accept: EventMember
  event_member_join: EventMember
  event_member_kick: EventMember
  event_member_leave: EventMember
  event_member_perm_add: EventMember
  event_member_perm_remove: EventMember
  event_settings_add: Event
  event_settings_remove: Event
  test?: Maybe<Scalars['String']['output']>
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

export type MutationEvent_CreateArgs = {
  address: Scalars['String']['input']
  basedGroup?: InputMaybe<Scalars['String']['input']>
  categoryId: Scalars['ID']['input']
  dateEnd?: InputMaybe<Scalars['DateTime']['input']>
  dateStart: Scalars['DateTime']['input']
  description: Scalars['String']['input']
  image: Scalars['Upload']['input']
  settings?: InputMaybe<Scalars['BigInt']['input']>
  title: Scalars['String']['input']
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

export type Query = {
  __typename?: 'Query'
  chat_get_as_member?: Maybe<Array<Chat>>
  chat_get_as_owner?: Maybe<Array<Chat>>
  chat_get_events?: Maybe<Array<Event>>
  chat_get_groups?: Maybe<Array<Group>>
  chat_get_members?: Maybe<Array<ChatMember>>
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
