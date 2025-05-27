import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'
import { EventMapper } from './events/schema.mappers.js'
import { UserContext } from '../types/context.js'
export type Maybe<T> = T | null | undefined
export type InputMaybe<T> = T | null | undefined
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  BigInt: { input: bigint; output: bigint }
  DateTime: { input: Date | string; output: Date | string }
  Upload: { input: any; output: any }
}

export type Announce = {
  __typename?: 'Announce'
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  event?: Maybe<Event>
  eventId?: Maybe<Scalars['String']['output']>
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
  ownerId: Scalars['String']['output']
}

export type ChatMember = {
  __typename?: 'ChatMember'
  chat: Chat
  chatId: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  id: Scalars['ID']['output']
  permissions: Scalars['BigInt']['output']
  user: User
  userId: Scalars['String']['output']
}

export type Comment = {
  __typename?: 'Comment'
  comment: Scalars['String']['output']
  event: Event
  eventId?: Maybe<Scalars['String']['output']>
  from: User
  fromId: Scalars['String']['output']
  id: Scalars['ID']['output']
}

export type Event = {
  __typename?: 'Event'
  address: Scalars['String']['output']
  announces?: Maybe<Array<Announce>>
  category: Category
  categoryId: Scalars['String']['output']
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
  ownerId: Scalars['String']['output']
  title: Scalars['String']['output']
}

export type EventMember = {
  __typename?: 'EventMember'
  createdAt: Scalars['DateTime']['output']
  event: Event
  eventId: Scalars['String']['output']
  id: Scalars['ID']['output']
  permissions: Scalars['BigInt']['output']
  user: User
  userId: Scalars['String']['output']
}

export type Group = {
  __typename?: 'Group'
  id: Scalars['ID']['output']
  linkedChats?: Maybe<Array<Chat>>
  linkedEvents?: Maybe<Array<Event>>
  members?: Maybe<Array<GroupMember>>
  name: Scalars['String']['output']
  owner?: Maybe<User>
  ownerId: Scalars['String']['output']
}

export type GroupMember = {
  __typename?: 'GroupMember'
  createdAt: Scalars['DateTime']['output']
  group: Group
  groupId: Scalars['String']['output']
  id: Scalars['ID']['output']
  permissions: Scalars['BigInt']['output']
  user: User
  userId: Scalars['String']['output']
}

export type Message = {
  __typename?: 'Message'
  chat: Chat
  chatId: Scalars['String']['output']
  content: Scalars['String']['output']
  id: Scalars['ID']['output']
  user: User
  userId: Scalars['String']['output']
}

export type Mutation = {
  __typename?: 'Mutation'
  apiTest?: Maybe<Scalars['String']['output']>
  askForCategory?: Maybe<Scalars['String']['output']>
  askForDescription?: Maybe<Scalars['String']['output']>
  comment: Comment
  createAnnounce: Announce
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

export type MutationapiTestArgs = {
  input: Scalars['String']['input']
}

export type MutationaskForCategoryArgs = {
  input: Scalars['String']['input']
}

export type MutationaskForDescriptionArgs = {
  input: Scalars['String']['input']
}

export type MutationcommentArgs = {
  comment: Scalars['String']['input']
  eventId: Scalars['String']['input']
  fromId: Scalars['String']['input']
}

export type MutationcreateAnnounceArgs = {
  description: Scalars['String']['input']
  eventId: Scalars['ID']['input']
  title: Scalars['String']['input']
}

export type MutationcreateEventArgs = {
  address: Scalars['String']['input']
  categoryName: Scalars['String']['input']
  dateEnd: Scalars['DateTime']['input']
  dateStart: Scalars['DateTime']['input']
  description: Scalars['String']['input']
  image: Scalars['Upload']['input']
  title: Scalars['String']['input']
}

export type MutationdeleteEventArgs = {
  eventId: Scalars['ID']['input']
}

export type MutationeditEventArgs = {
  address: Scalars['String']['input']
  categoryName: Scalars['String']['input']
  dateEnd: Scalars['DateTime']['input']
  dateStart: Scalars['DateTime']['input']
  description: Scalars['String']['input']
  eventId: Scalars['ID']['input']
  image?: InputMaybe<Scalars['Upload']['input']>
  title: Scalars['String']['input']
}

export type MutationloginArgs = {
  password: Scalars['String']['input']
  username: Scalars['String']['input']
}

export type MutationrateUserArgs = {
  fromId: Scalars['String']['input']
  rate: Scalars['Int']['input']
  toId: Scalars['String']['input']
}

export type MutationregisterArgs = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
  username: Scalars['String']['input']
}

export type MutationsubscribeArgs = {
  eventId: Scalars['ID']['input']
}

export type MutationtestUploadArgs = {
  file: Scalars['Upload']['input']
  test: Scalars['String']['input']
}

export type MutationunsubscribeArgs = {
  eventId: Scalars['ID']['input']
}

export type Query = {
  __typename?: 'Query'
  categories?: Maybe<Array<Category>>
  event?: Maybe<Event>
  events?: Maybe<Array<Event>>
  joinedEvents?: Maybe<Array<Event>>
  me?: Maybe<User>
  myEvents?: Maybe<Array<Event>>
  user?: Maybe<User>
  users?: Maybe<Array<User>>
}

export type QueryeventArgs = {
  eventId: Scalars['ID']['input']
}

export type QueryeventsArgs = {
  category?: InputMaybe<Scalars['String']['input']>
}

export type QueryjoinedEventsArgs = {
  userId?: InputMaybe<Scalars['String']['input']>
}

export type QueryuserArgs = {
  userId: Scalars['String']['input']
}

export type QueryusersArgs = {
  test: Scalars['String']['input']
}

export type Rating = {
  __typename?: 'Rating'
  id: Scalars['ID']['output']
  rate: Scalars['Int']['output']
  rated: User
  ratedId: Scalars['String']['output']
  rater: User
  raterId: Scalars['String']['output']
}

export type User = {
  __typename?: 'User'
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

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Announce: ResolverTypeWrapper<Omit<Announce, 'event'> & { event?: Maybe<ResolversTypes['Event']> }>
  String: ResolverTypeWrapper<Scalars['String']['output']>
  ID: ResolverTypeWrapper<Scalars['ID']['output']>
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>
  Category: ResolverTypeWrapper<Omit<Category, 'events'> & { events?: Maybe<Array<ResolversTypes['Event']>> }>
  Chat: ResolverTypeWrapper<
    Omit<Chat, 'linkedEvents' | 'linkedGroups' | 'members' | 'messages' | 'owner'> & {
      linkedEvents?: Maybe<Array<ResolversTypes['Event']>>
      linkedGroups?: Maybe<Array<ResolversTypes['Group']>>
      members?: Maybe<Array<ResolversTypes['ChatMember']>>
      messages?: Maybe<Array<ResolversTypes['Message']>>
      owner?: Maybe<ResolversTypes['User']>
    }
  >
  ChatMember: ResolverTypeWrapper<
    Omit<ChatMember, 'chat' | 'user'> & { chat: ResolversTypes['Chat']; user: ResolversTypes['User'] }
  >
  Comment: ResolverTypeWrapper<
    Omit<Comment, 'event' | 'from'> & { event: ResolversTypes['Event']; from: ResolversTypes['User'] }
  >
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>
  Event: ResolverTypeWrapper<EventMapper>
  EventMember: ResolverTypeWrapper<
    Omit<EventMember, 'event' | 'user'> & { event: ResolversTypes['Event']; user: ResolversTypes['User'] }
  >
  Group: ResolverTypeWrapper<
    Omit<Group, 'linkedChats' | 'linkedEvents' | 'members' | 'owner'> & {
      linkedChats?: Maybe<Array<ResolversTypes['Chat']>>
      linkedEvents?: Maybe<Array<ResolversTypes['Event']>>
      members?: Maybe<Array<ResolversTypes['GroupMember']>>
      owner?: Maybe<ResolversTypes['User']>
    }
  >
  GroupMember: ResolverTypeWrapper<
    Omit<GroupMember, 'group' | 'user'> & { group: ResolversTypes['Group']; user: ResolversTypes['User'] }
  >
  Message: ResolverTypeWrapper<
    Omit<Message, 'chat' | 'user'> & { chat: ResolversTypes['Chat']; user: ResolversTypes['User'] }
  >
  Mutation: ResolverTypeWrapper<{}>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>
  Int: ResolverTypeWrapper<Scalars['Int']['output']>
  Query: ResolverTypeWrapper<{}>
  Rating: ResolverTypeWrapper<
    Omit<Rating, 'rated' | 'rater'> & { rated: ResolversTypes['User']; rater: ResolversTypes['User'] }
  >
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>
  User: ResolverTypeWrapper<
    Omit<
      User,
      | 'chats'
      | 'chatsCreated'
      | 'comments'
      | 'events'
      | 'eventsCreated'
      | 'groups'
      | 'groupsCreated'
      | 'messages'
      | 'ratingsGiven'
      | 'ratingsReceived'
    > & {
      chats?: Maybe<Array<ResolversTypes['ChatMember']>>
      chatsCreated?: Maybe<Array<ResolversTypes['Chat']>>
      comments?: Maybe<Array<ResolversTypes['Comment']>>
      events?: Maybe<Array<ResolversTypes['EventMember']>>
      eventsCreated?: Maybe<Array<ResolversTypes['Event']>>
      groups?: Maybe<Array<ResolversTypes['GroupMember']>>
      groupsCreated?: Maybe<Array<ResolversTypes['Group']>>
      messages?: Maybe<Array<ResolversTypes['Message']>>
      ratingsGiven?: Maybe<Array<ResolversTypes['Rating']>>
      ratingsReceived?: Maybe<Array<ResolversTypes['Rating']>>
    }
  >
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Announce: Omit<Announce, 'event'> & { event?: Maybe<ResolversParentTypes['Event']> }
  String: Scalars['String']['output']
  ID: Scalars['ID']['output']
  BigInt: Scalars['BigInt']['output']
  Category: Omit<Category, 'events'> & { events?: Maybe<Array<ResolversParentTypes['Event']>> }
  Chat: Omit<Chat, 'linkedEvents' | 'linkedGroups' | 'members' | 'messages' | 'owner'> & {
    linkedEvents?: Maybe<Array<ResolversParentTypes['Event']>>
    linkedGroups?: Maybe<Array<ResolversParentTypes['Group']>>
    members?: Maybe<Array<ResolversParentTypes['ChatMember']>>
    messages?: Maybe<Array<ResolversParentTypes['Message']>>
    owner?: Maybe<ResolversParentTypes['User']>
  }
  ChatMember: Omit<ChatMember, 'chat' | 'user'> & {
    chat: ResolversParentTypes['Chat']
    user: ResolversParentTypes['User']
  }
  Comment: Omit<Comment, 'event' | 'from'> & {
    event: ResolversParentTypes['Event']
    from: ResolversParentTypes['User']
  }
  DateTime: Scalars['DateTime']['output']
  Event: EventMapper
  EventMember: Omit<EventMember, 'event' | 'user'> & {
    event: ResolversParentTypes['Event']
    user: ResolversParentTypes['User']
  }
  Group: Omit<Group, 'linkedChats' | 'linkedEvents' | 'members' | 'owner'> & {
    linkedChats?: Maybe<Array<ResolversParentTypes['Chat']>>
    linkedEvents?: Maybe<Array<ResolversParentTypes['Event']>>
    members?: Maybe<Array<ResolversParentTypes['GroupMember']>>
    owner?: Maybe<ResolversParentTypes['User']>
  }
  GroupMember: Omit<GroupMember, 'group' | 'user'> & {
    group: ResolversParentTypes['Group']
    user: ResolversParentTypes['User']
  }
  Message: Omit<Message, 'chat' | 'user'> & { chat: ResolversParentTypes['Chat']; user: ResolversParentTypes['User'] }
  Mutation: {}
  Boolean: Scalars['Boolean']['output']
  Int: Scalars['Int']['output']
  Query: {}
  Rating: Omit<Rating, 'rated' | 'rater'> & { rated: ResolversParentTypes['User']; rater: ResolversParentTypes['User'] }
  Upload: Scalars['Upload']['output']
  User: Omit<
    User,
    | 'chats'
    | 'chatsCreated'
    | 'comments'
    | 'events'
    | 'eventsCreated'
    | 'groups'
    | 'groupsCreated'
    | 'messages'
    | 'ratingsGiven'
    | 'ratingsReceived'
  > & {
    chats?: Maybe<Array<ResolversParentTypes['ChatMember']>>
    chatsCreated?: Maybe<Array<ResolversParentTypes['Chat']>>
    comments?: Maybe<Array<ResolversParentTypes['Comment']>>
    events?: Maybe<Array<ResolversParentTypes['EventMember']>>
    eventsCreated?: Maybe<Array<ResolversParentTypes['Event']>>
    groups?: Maybe<Array<ResolversParentTypes['GroupMember']>>
    groupsCreated?: Maybe<Array<ResolversParentTypes['Group']>>
    messages?: Maybe<Array<ResolversParentTypes['Message']>>
    ratingsGiven?: Maybe<Array<ResolversParentTypes['Rating']>>
    ratingsReceived?: Maybe<Array<ResolversParentTypes['Rating']>>
  }
}

export type AnnounceResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['Announce'] = ResolversParentTypes['Announce'],
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>
  eventId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt'
}

export type CategoryResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category'],
> = {
  events?: Resolver<Maybe<Array<ResolversTypes['Event']>>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ChatResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['Chat'] = ResolversParentTypes['Chat'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  linkedEvents?: Resolver<Maybe<Array<ResolversTypes['Event']>>, ParentType, ContextType>
  linkedGroups?: Resolver<Maybe<Array<ResolversTypes['Group']>>, ParentType, ContextType>
  members?: Resolver<Maybe<Array<ResolversTypes['ChatMember']>>, ParentType, ContextType>
  messages?: Resolver<Maybe<Array<ResolversTypes['Message']>>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  owner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  ownerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ChatMemberResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['ChatMember'] = ResolversParentTypes['ChatMember'],
> = {
  chat?: Resolver<ResolversTypes['Chat'], ParentType, ContextType>
  chatId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  permissions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CommentResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment'],
> = {
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  event?: Resolver<ResolversTypes['Event'], ParentType, ContextType>
  eventId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  from?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  fromId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type EventResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event'],
> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  announces?: Resolver<Maybe<Array<ResolversTypes['Announce']>>, ParentType, ContextType>
  category?: Resolver<ResolversTypes['Category'], ParentType, ContextType>
  categoryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  comments?: Resolver<Maybe<Array<ResolversTypes['Comment']>>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  dateEnd?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  dateStart?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  linkedChats?: Resolver<Maybe<Array<ResolversTypes['Chat']>>, ParentType, ContextType>
  linkedGroups?: Resolver<Maybe<Array<ResolversTypes['Group']>>, ParentType, ContextType>
  members?: Resolver<Maybe<Array<ResolversTypes['EventMember']>>, ParentType, ContextType>
  owner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  ownerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type EventMemberResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['EventMember'] = ResolversParentTypes['EventMember'],
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  event?: Resolver<ResolversTypes['Event'], ParentType, ContextType>
  eventId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  permissions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GroupResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['Group'] = ResolversParentTypes['Group'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  linkedChats?: Resolver<Maybe<Array<ResolversTypes['Chat']>>, ParentType, ContextType>
  linkedEvents?: Resolver<Maybe<Array<ResolversTypes['Event']>>, ParentType, ContextType>
  members?: Resolver<Maybe<Array<ResolversTypes['GroupMember']>>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  owner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  ownerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GroupMemberResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['GroupMember'] = ResolversParentTypes['GroupMember'],
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  group?: Resolver<ResolversTypes['Group'], ParentType, ContextType>
  groupId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  permissions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MessageResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message'],
> = {
  chat?: Resolver<ResolversTypes['Chat'], ParentType, ContextType>
  chatId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MutationResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  apiTest?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<MutationapiTestArgs, 'input'>
  >
  askForCategory?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<MutationaskForCategoryArgs, 'input'>
  >
  askForDescription?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<MutationaskForDescriptionArgs, 'input'>
  >
  comment?: Resolver<
    ResolversTypes['Comment'],
    ParentType,
    ContextType,
    RequireFields<MutationcommentArgs, 'comment' | 'eventId' | 'fromId'>
  >
  createAnnounce?: Resolver<
    ResolversTypes['Announce'],
    ParentType,
    ContextType,
    RequireFields<MutationcreateAnnounceArgs, 'description' | 'eventId' | 'title'>
  >
  createEvent?: Resolver<
    ResolversTypes['Event'],
    ParentType,
    ContextType,
    RequireFields<
      MutationcreateEventArgs,
      'address' | 'categoryName' | 'dateEnd' | 'dateStart' | 'description' | 'image' | 'title'
    >
  >
  deleteEvent?: Resolver<
    Maybe<ResolversTypes['Event']>,
    ParentType,
    ContextType,
    RequireFields<MutationdeleteEventArgs, 'eventId'>
  >
  editEvent?: Resolver<
    ResolversTypes['Event'],
    ParentType,
    ContextType,
    RequireFields<
      MutationeditEventArgs,
      'address' | 'categoryName' | 'dateEnd' | 'dateStart' | 'description' | 'eventId' | 'title'
    >
  >
  login?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationloginArgs, 'password' | 'username'>
  >
  rateUser?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<MutationrateUserArgs, 'fromId' | 'rate' | 'toId'>
  >
  register?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationregisterArgs, 'email' | 'password' | 'username'>
  >
  subscribe?: Resolver<
    ResolversTypes['Event'],
    ParentType,
    ContextType,
    RequireFields<MutationsubscribeArgs, 'eventId'>
  >
  testUpload?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationtestUploadArgs, 'file' | 'test'>
  >
  unsubscribe?: Resolver<
    ResolversTypes['Event'],
    ParentType,
    ContextType,
    RequireFields<MutationunsubscribeArgs, 'eventId'>
  >
}

export type QueryResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  categories?: Resolver<Maybe<Array<ResolversTypes['Category']>>, ParentType, ContextType>
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryeventArgs, 'eventId'>>
  events?: Resolver<Maybe<Array<ResolversTypes['Event']>>, ParentType, ContextType, Partial<QueryeventsArgs>>
  joinedEvents?: Resolver<
    Maybe<Array<ResolversTypes['Event']>>,
    ParentType,
    ContextType,
    Partial<QueryjoinedEventsArgs>
  >
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  myEvents?: Resolver<Maybe<Array<ResolversTypes['Event']>>, ParentType, ContextType>
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'userId'>>
  users?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType, RequireFields<QueryusersArgs, 'test'>>
}

export type RatingResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['Rating'] = ResolversParentTypes['Rating'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  rate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  rated?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  ratedId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  rater?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  raterId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type UserResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = {
  authToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  chats?: Resolver<Maybe<Array<ResolversTypes['ChatMember']>>, ParentType, ContextType>
  chatsCreated?: Resolver<Maybe<Array<ResolversTypes['Chat']>>, ParentType, ContextType>
  comments?: Resolver<Maybe<Array<ResolversTypes['Comment']>>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  events?: Resolver<Maybe<Array<ResolversTypes['EventMember']>>, ParentType, ContextType>
  eventsCreated?: Resolver<Maybe<Array<ResolversTypes['Event']>>, ParentType, ContextType>
  groups?: Resolver<Maybe<Array<ResolversTypes['GroupMember']>>, ParentType, ContextType>
  groupsCreated?: Resolver<Maybe<Array<ResolversTypes['Group']>>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  messages?: Resolver<Maybe<Array<ResolversTypes['Message']>>, ParentType, ContextType>
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  ratingsGiven?: Resolver<Maybe<Array<ResolversTypes['Rating']>>, ParentType, ContextType>
  ratingsReceived?: Resolver<Maybe<Array<ResolversTypes['Rating']>>, ParentType, ContextType>
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type Resolvers<ContextType = UserContext> = {
  Announce?: AnnounceResolvers<ContextType>
  BigInt?: GraphQLScalarType
  Category?: CategoryResolvers<ContextType>
  Chat?: ChatResolvers<ContextType>
  ChatMember?: ChatMemberResolvers<ContextType>
  Comment?: CommentResolvers<ContextType>
  DateTime?: GraphQLScalarType
  Event?: EventResolvers<ContextType>
  EventMember?: EventMemberResolvers<ContextType>
  Group?: GroupResolvers<ContextType>
  GroupMember?: GroupMemberResolvers<ContextType>
  Message?: MessageResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  Rating?: RatingResolvers<ContextType>
  Upload?: GraphQLScalarType
  User?: UserResolvers<ContextType>
}
