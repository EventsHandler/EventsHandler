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
  DateTime: { input: any; output: any }
  Upload: { input: any; output: any }
}

export type Announces = {
  __typename?: 'Announces'
  createdAt: Scalars['DateTime']['output']
  description: Scalars['String']['output']
  event?: Maybe<Event>
  title: Scalars['String']['output']
}

export type Category = {
  __typename?: 'Category'
  events?: Maybe<Array<Event>>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
}

export type Comment = {
  __typename?: 'Comment'
  comment?: Maybe<Scalars['String']['output']>
  event: Event
  from: User
}

export type Event = {
  __typename?: 'Event'
  address: Scalars['String']['output']
  announces?: Maybe<Array<Announces>>
  category: Category
  comments?: Maybe<Array<Comment>>
  createdAt: Scalars['DateTime']['output']
  creator: User
  date: Scalars['DateTime']['output']
  description: Scalars['String']['output']
  id: Scalars['ID']['output']
  image: Scalars['String']['output']
  participants?: Maybe<Array<User>>
  title: Scalars['String']['output']
  userId: Scalars['ID']['output']
}

export type Mutation = {
  __typename?: 'Mutation'
  apiTest?: Maybe<Scalars['String']['output']>
  askForCategory?: Maybe<Scalars['String']['output']>
  askForDescription?: Maybe<Scalars['String']['output']>
  comment: Comment
  createAnnounce: Announces
  createEvent: Event
  deleteEvent?: Maybe<Event>
  editEvent: Event
  login: User
  rateUser?: Maybe<Scalars['Boolean']['output']>
  register: User
  subscribe: Event
  testUpload: Scalars['String']['output']
  unsubscribe: Event
}

export type MutationApiTestArgs = {
  input: Scalars['String']['input']
}

export type MutationAskForCategoryArgs = {
  input: Scalars['String']['input']
}

export type MutationAskForDescriptionArgs = {
  input: Scalars['String']['input']
}

export type MutationCommentArgs = {
  comment: Scalars['String']['input']
  eventId: Scalars['String']['input']
  fromId: Scalars['String']['input']
}

export type MutationCreateAnnounceArgs = {
  description: Scalars['String']['input']
  eventId: Scalars['ID']['input']
  title: Scalars['String']['input']
}

export type MutationCreateEventArgs = {
  address: Scalars['String']['input']
  categoryName: Scalars['String']['input']
  date: Scalars['DateTime']['input']
  description: Scalars['String']['input']
  image: Scalars['Upload']['input']
  title: Scalars['String']['input']
}

export type MutationDeleteEventArgs = {
  eventId: Scalars['ID']['input']
}

export type MutationEditEventArgs = {
  address: Scalars['String']['input']
  categoryName: Scalars['String']['input']
  date: Scalars['DateTime']['input']
  description: Scalars['String']['input']
  eventId: Scalars['ID']['input']
  image?: InputMaybe<Scalars['Upload']['input']>
  title: Scalars['String']['input']
}

export type MutationLoginArgs = {
  password: Scalars['String']['input']
  username: Scalars['String']['input']
}

export type MutationRateUserArgs = {
  fromId: Scalars['String']['input']
  rate: Scalars['Int']['input']
  toId: Scalars['String']['input']
}

export type MutationRegisterArgs = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
  username: Scalars['String']['input']
}

export type MutationSubscribeArgs = {
  eventId: Scalars['ID']['input']
}

export type MutationTestUploadArgs = {
  file: Scalars['Upload']['input']
  test: Scalars['String']['input']
}

export type MutationUnsubscribeArgs = {
  eventId: Scalars['ID']['input']
}

export type Query = {
  __typename?: 'Query'
  categories?: Maybe<Array<Category>>
  event?: Maybe<Event>
  events?: Maybe<Array<Event>>
  findByCategory?: Maybe<Array<Event>>
  joinedEvents?: Maybe<Array<Event>>
  me?: Maybe<User>
  myEvents?: Maybe<Array<Event>>
  user?: Maybe<User>
  users?: Maybe<Array<User>>
}

export type QueryEventArgs = {
  eventId: Scalars['ID']['input']
}

export type QueryEventsArgs = {
  category?: InputMaybe<Scalars['String']['input']>
}

export type QueryFindByCategoryArgs = {
  category: Scalars['String']['input']
}

export type QueryJoinedEventsArgs = {
  userId?: InputMaybe<Scalars['String']['input']>
}

export type QueryUserArgs = {
  userId: Scalars['String']['input']
}

export type Rateing = {
  __typename?: 'Rateing'
  fromId: Scalars['ID']['output']
  rate: Scalars['Int']['output']
  toId: Scalars['ID']['output']
}

export type User = {
  __typename?: 'User'
  comments?: Maybe<Array<Comment>>
  createdAt: Scalars['DateTime']['output']
  createdEvents?: Maybe<Array<Event>>
  email: Scalars['String']['output']
  events?: Maybe<Array<Event>>
  id: Scalars['ID']['output']
  myRates?: Maybe<Array<Rateing>>
  password: Scalars['String']['output']
  rates?: Maybe<Array<Rateing>>
  username: Scalars['String']['output']
}

export type CreateEventMutationVariables = Exact<{
  title: Scalars['String']['input']
  description: Scalars['String']['input']
  date: Scalars['DateTime']['input']
  image: Scalars['Upload']['input']
  address: Scalars['String']['input']
  categoryName: Scalars['String']['input']
}>

export type CreateEventMutation = { __typename?: 'Mutation'; createEvent: { __typename?: 'Event'; id: string } }

export type EditEventMutationVariables = Exact<{
  title: Scalars['String']['input']
  description: Scalars['String']['input']
  date: Scalars['DateTime']['input']
  image?: InputMaybe<Scalars['Upload']['input']>
  address: Scalars['String']['input']
  categoryName: Scalars['String']['input']
  eventId: Scalars['ID']['input']
}>

export type EditEventMutation = { __typename?: 'Mutation'; editEvent: { __typename?: 'Event'; id: string } }

export type SubscribeEventMutationVariables = Exact<{
  eventId: Scalars['ID']['input']
}>

export type SubscribeEventMutation = { __typename?: 'Mutation'; subscribe: { __typename?: 'Event'; id: string } }

export type UnsubscribeEventMutationVariables = Exact<{
  eventId: Scalars['ID']['input']
}>

export type UnsubscribeEventMutation = { __typename?: 'Mutation'; unsubscribe: { __typename?: 'Event'; id: string } }

export type LoginMutationVariables = Exact<{
  username: Scalars['String']['input']
  password: Scalars['String']['input']
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login: { __typename?: 'User'; id: string; username: string; email: string; createdAt: any }
}

export type RegisterMutationVariables = Exact<{
  username: Scalars['String']['input']
  password: Scalars['String']['input']
  email: Scalars['String']['input']
}>

export type RegisterMutation = {
  __typename?: 'Mutation'
  register: { __typename?: 'User'; id: string; username: string; email: string; createdAt: any }
}

export type UploadFileMutationVariables = Exact<{
  file: Scalars['Upload']['input']
  test: Scalars['String']['input']
}>

export type UploadFileMutation = { __typename?: 'Mutation'; testUpload: string }

export type CreateAnnounceMutationVariables = Exact<{
  eventId: Scalars['ID']['input']
  title: Scalars['String']['input']
  description: Scalars['String']['input']
}>

export type CreateAnnounceMutation = {
  __typename?: 'Mutation'
  createAnnounce: { __typename?: 'Announces'; title: string }
}

export type DeleteEventMutationVariables = Exact<{
  eventId: Scalars['ID']['input']
}>

export type DeleteEventMutation = { __typename?: 'Mutation'; deleteEvent?: { __typename?: 'Event'; id: string } | null }

export type AskForCategoryMutationVariables = Exact<{
  input: Scalars['String']['input']
}>

export type AskForCategoryMutation = { __typename?: 'Mutation'; askForCategory?: string | null }

export type AskForDescriptionMutationVariables = Exact<{
  input: Scalars['String']['input']
}>

export type AskForDescriptionMutation = { __typename?: 'Mutation'; askForDescription?: string | null }

export type RateUserMutationVariables = Exact<{
  fromId: Scalars['String']['input']
  toId: Scalars['String']['input']
  rate: Scalars['Int']['input']
}>

export type RateUserMutation = { __typename?: 'Mutation'; rateUser?: boolean | null }

export type CommentMutationVariables = Exact<{
  fromId: Scalars['String']['input']
  eventId: Scalars['String']['input']
  comment: Scalars['String']['input']
}>

export type CommentMutation = {
  __typename?: 'Mutation'
  comment: { __typename?: 'Comment'; comment?: string | null; from: { __typename?: 'User'; username: string } }
}

export type EventsQueryVariables = Exact<{
  category?: InputMaybe<Scalars['String']['input']>
}>

export type EventsQuery = {
  __typename?: 'Query'
  events?: Array<{
    __typename?: 'Event'
    id: string
    title: string
    description: string
    date: any
    image: string
    address: string
    creator: { __typename?: 'User'; username: string; id: string }
    announces?: Array<{ __typename?: 'Announces'; title: string; description: string }> | null
    participants?: Array<{ __typename?: 'User'; username: string }> | null
    category: { __typename?: 'Category'; name: string }
  }> | null
}

export type JoinedEventsQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>
}>

export type JoinedEventsQuery = {
  __typename?: 'Query'
  joinedEvents?: Array<{
    __typename?: 'Event'
    id: string
    title: string
    description: string
    date: any
    image: string
    address: string
    creator: { __typename?: 'User'; username: string; id: string }
    announces?: Array<{ __typename?: 'Announces'; title: string; description: string }> | null
    participants?: Array<{ __typename?: 'User'; username: string }> | null
    category: { __typename?: 'Category'; name: string }
  }> | null
}

export type MyEventsQueryVariables = Exact<{ [key: string]: never }>

export type MyEventsQuery = {
  __typename?: 'Query'
  myEvents?: Array<{
    __typename?: 'Event'
    id: string
    title: string
    description: string
    date: any
    image: string
    address: string
    creator: { __typename?: 'User'; username: string; id: string }
    announces?: Array<{ __typename?: 'Announces'; title: string; description: string }> | null
    participants?: Array<{ __typename?: 'User'; username: string }> | null
    category: { __typename?: 'Category'; name: string }
  }> | null
}

export type EventQueryVariables = Exact<{
  eventId: Scalars['ID']['input']
}>

export type EventQuery = {
  __typename?: 'Query'
  event?: {
    __typename?: 'Event'
    id: string
    title: string
    description: string
    date: any
    image: string
    address: string
    creator: {
      __typename?: 'User'
      username: string
      id: string
      myRates?: Array<{ __typename?: 'Rateing'; fromId: string; toId: string; rate: number }> | null
    }
    announces?: Array<{ __typename?: 'Announces'; title: string; description: string }> | null
    participants?: Array<{ __typename?: 'User'; id: string; username: string }> | null
    category: { __typename?: 'Category'; name: string }
    comments?: Array<{
      __typename?: 'Comment'
      comment?: string | null
      from: { __typename?: 'User'; username: string; id: string }
    }> | null
  } | null
}

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = { __typename?: 'Query'; me?: { __typename?: 'User'; username: string; id: string } | null }

export type CategorysQueryVariables = Exact<{ [key: string]: never }>

export type CategorysQuery = {
  __typename?: 'Query'
  categories?: Array<{ __typename?: 'Category'; name: string }> | null
}

export type UserQueryVariables = Exact<{
  userId: Scalars['String']['input']
}>

export type UserQuery = {
  __typename?: 'Query'
  user?: {
    __typename?: 'User'
    id: string
    username: string
    email: string
    createdAt: any
    createdEvents?: Array<{
      __typename?: 'Event'
      id: string
      title: string
      description: string
      date: any
      image: string
      address: string
      creator: { __typename?: 'User'; username: string; id: string }
      announces?: Array<{ __typename?: 'Announces'; title: string; description: string }> | null
      participants?: Array<{ __typename?: 'User'; username: string }> | null
      category: { __typename?: 'Category'; name: string }
    }> | null
    myRates?: Array<{ __typename?: 'Rateing'; fromId: string; toId: string; rate: number }> | null
  } | null
}

export const CreateEventDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateEvent' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'title' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'description' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'date' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'DateTime' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'image' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Upload' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'address' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'categoryName' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createEvent' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'title' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'title' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'description' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'description' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'date' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'date' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'image' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'image' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'address' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'address' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'categoryName' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'categoryName' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateEventMutation, CreateEventMutationVariables>
export const EditEventDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'EditEvent' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'title' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'description' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'date' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'DateTime' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'image' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Upload' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'address' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'categoryName' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'eventId' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'editEvent' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'title' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'title' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'description' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'description' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'date' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'date' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'image' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'image' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'address' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'address' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'categoryName' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'categoryName' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'eventId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'eventId' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EditEventMutation, EditEventMutationVariables>
export const SubscribeEventDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SubscribeEvent' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'eventId' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'subscribe' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'eventId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'eventId' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SubscribeEventMutation, SubscribeEventMutationVariables>
export const UnsubscribeEventDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UnsubscribeEvent' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'eventId' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'unsubscribe' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'eventId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'eventId' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UnsubscribeEventMutation, UnsubscribeEventMutationVariables>
export const LoginDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Login' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'username' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'password' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'login' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'username' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'username' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'password' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'password' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>
export const RegisterDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Register' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'username' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'password' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'email' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'register' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'username' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'username' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'password' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'password' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'email' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'email' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>
export const UploadFileDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UploadFile' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'file' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Upload' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'test' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'testUpload' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'file' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'file' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'test' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'test' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UploadFileMutation, UploadFileMutationVariables>
export const CreateAnnounceDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateAnnounce' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'eventId' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'title' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'description' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createAnnounce' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'eventId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'eventId' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'title' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'title' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'description' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'description' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'title' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateAnnounceMutation, CreateAnnounceMutationVariables>
export const DeleteEventDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteEvent' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'eventId' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteEvent' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'eventId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'eventId' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteEventMutation, DeleteEventMutationVariables>
export const AskForCategoryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AskForCategory' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'askForCategory' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AskForCategoryMutation, AskForCategoryMutationVariables>
export const AskForDescriptionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AskForDescription' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'askForDescription' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AskForDescriptionMutation, AskForDescriptionMutationVariables>
export const RateUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RateUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'fromId' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'toId' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'rate' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'rateUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'fromId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'fromId' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'toId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'toId' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'rate' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'rate' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RateUserMutation, RateUserMutationVariables>
export const CommentDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Comment' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'fromId' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'eventId' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'comment' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'comment' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'fromId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'fromId' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'eventId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'eventId' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'comment' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'comment' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'comment' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'from' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'username' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CommentMutation, CommentMutationVariables>
export const EventsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Events' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'category' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'events' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'category' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'category' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'creator' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'announces' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'participants' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'username' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'category' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventsQuery, EventsQueryVariables>
export const JoinedEventsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'JoinedEvents' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'joinedEvents' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'creator' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'announces' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'participants' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'username' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'category' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<JoinedEventsQuery, JoinedEventsQueryVariables>
export const MyEventsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'MyEvents' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'myEvents' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'creator' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'announces' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'participants' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'username' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'category' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MyEventsQuery, MyEventsQueryVariables>
export const EventDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Event' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'eventId' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'event' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'eventId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'eventId' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'creator' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'myRates' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'fromId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'toId' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'rate' } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'announces' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'participants' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'category' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'comments' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'comment' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'from' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventQuery, EventQueryVariables>
export const MeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Me' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'me' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MeQuery, MeQueryVariables>
export const CategorysDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Categorys' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'categories' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CategorysQuery, CategorysQueryVariables>
export const UserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'User' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'createdEvents' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'creator' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'announces' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'participants' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'username' } }],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'category' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'myRates' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'fromId' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'toId' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'rate' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserQuery, UserQueryVariables>
