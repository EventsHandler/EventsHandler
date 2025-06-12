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
  dateEnd: Scalars['DateTime']['output']
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
  test?: Maybe<Scalars['String']['output']>
}

export type Query = {
  __typename?: 'Query'
  test?: Maybe<Scalars['String']['output']>
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

export type TestMutationVariables = Exact<{
  name: Scalars['String']['input']
}>

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
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
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
