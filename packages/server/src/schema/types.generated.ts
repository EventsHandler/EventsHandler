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
  test?: Maybe<Scalars['String']['output']>
}

export type Mutationchat_createArgs = {
  name: Scalars['String']['input']
}

export type Mutationchat_deleteArgs = {
  id: Scalars['ID']['input']
}

export type Mutationchat_link_eventArgs = {
  chatId: Scalars['ID']['input']
  eventId: Scalars['ID']['input']
}

export type Mutationchat_link_groupArgs = {
  chatId: Scalars['ID']['input']
  groupId: Scalars['ID']['input']
}

export type Mutationchat_member_acceptArgs = {
  chatId: Scalars['ID']['input']
  userId: Scalars['ID']['input']
}

export type Mutationchat_member_joinArgs = {
  chatId: Scalars['ID']['input']
}

export type Mutationchat_member_kickArgs = {
  chatId: Scalars['ID']['input']
  userId: Scalars['ID']['input']
}

export type Mutationchat_member_leaveArgs = {
  chatId: Scalars['ID']['input']
}

export type Mutationchat_member_perm_addArgs = {
  chatId: Scalars['ID']['input']
  permission: Scalars['String']['input']
  userId: Scalars['ID']['input']
}

export type Mutationchat_member_perm_removeArgs = {
  chatId: Scalars['ID']['input']
  permission: Scalars['String']['input']
  userId: Scalars['ID']['input']
}

export type Mutationchat_message_deleteArgs = {
  messageId: Scalars['ID']['input']
}

export type Mutationchat_message_sendArgs = {
  chatId: Scalars['ID']['input']
  message: Scalars['String']['input']
}

export type Mutationchat_settings_addArgs = {
  chatId: Scalars['ID']['input']
  setting: Scalars['String']['input']
}

export type Mutationchat_settings_removeArgs = {
  chatId: Scalars['ID']['input']
  setting: Scalars['String']['input']
}

export type Mutationevent_createArgs = {
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

export type Mutationevent_deleteArgs = {
  id: Scalars['ID']['input']
}

export type Mutationevent_link_chatArgs = {
  chatId: Scalars['ID']['input']
  eventId: Scalars['ID']['input']
}

export type Mutationevent_link_groupArgs = {
  eventId: Scalars['ID']['input']
  groupId: Scalars['ID']['input']
}

export type Mutationevent_member_acceptArgs = {
  eventId: Scalars['ID']['input']
  userId: Scalars['ID']['input']
}

export type Mutationevent_member_joinArgs = {
  eventId: Scalars['ID']['input']
}

export type Mutationevent_member_kickArgs = {
  eventId: Scalars['ID']['input']
  userId: Scalars['ID']['input']
}

export type Mutationevent_member_leaveArgs = {
  eventId: Scalars['ID']['input']
}

export type Mutationevent_member_perm_addArgs = {
  eventId: Scalars['ID']['input']
  permission: Scalars['String']['input']
  userId: Scalars['ID']['input']
}

export type Mutationevent_member_perm_removeArgs = {
  eventId: Scalars['ID']['input']
  permission: Scalars['String']['input']
  userId: Scalars['ID']['input']
}

export type Mutationevent_settings_addArgs = {
  eventId: Scalars['ID']['input']
  setting: Scalars['String']['input']
}

export type Mutationevent_settings_removeArgs = {
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

export type Querychat_get_eventsArgs = {
  chatId: Scalars['ID']['input']
}

export type Querychat_get_groupsArgs = {
  chatId: Scalars['ID']['input']
}

export type Querychat_get_membersArgs = {
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
  inbox?: Maybe<Array<Inbox>>
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
    Omit<ChatMember, 'chat' | 'user'> & { chat?: Maybe<ResolversTypes['Chat']>; user?: Maybe<ResolversTypes['User']> }
  >
  Comment: ResolverTypeWrapper<
    Omit<Comment, 'event' | 'user'> & { event?: Maybe<ResolversTypes['Event']>; user?: Maybe<ResolversTypes['User']> }
  >
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>
  Event: ResolverTypeWrapper<EventMapper>
  EventMember: ResolverTypeWrapper<
    Omit<EventMember, 'event' | 'user'> & {
      event?: Maybe<ResolversTypes['Event']>
      user?: Maybe<ResolversTypes['User']>
    }
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
    Omit<GroupMember, 'group' | 'user'> & {
      group?: Maybe<ResolversTypes['Group']>
      user?: Maybe<ResolversTypes['User']>
    }
  >
  Inbox: ResolverTypeWrapper<Omit<Inbox, 'user'> & { user?: Maybe<ResolversTypes['User']> }>
  Message: ResolverTypeWrapper<
    Omit<Message, 'chat' | 'user'> & { chat?: Maybe<ResolversTypes['Chat']>; user?: Maybe<ResolversTypes['User']> }
  >
  Mutation: ResolverTypeWrapper<{}>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>
  Query: ResolverTypeWrapper<{}>
  Rating: ResolverTypeWrapper<
    Omit<Rating, 'rated' | 'rater'> & { rated?: Maybe<ResolversTypes['User']>; rater?: Maybe<ResolversTypes['User']> }
  >
  Int: ResolverTypeWrapper<Scalars['Int']['output']>
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
      | 'inbox'
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
      inbox?: Maybe<Array<ResolversTypes['Inbox']>>
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
    chat?: Maybe<ResolversParentTypes['Chat']>
    user?: Maybe<ResolversParentTypes['User']>
  }
  Comment: Omit<Comment, 'event' | 'user'> & {
    event?: Maybe<ResolversParentTypes['Event']>
    user?: Maybe<ResolversParentTypes['User']>
  }
  DateTime: Scalars['DateTime']['output']
  Event: EventMapper
  EventMember: Omit<EventMember, 'event' | 'user'> & {
    event?: Maybe<ResolversParentTypes['Event']>
    user?: Maybe<ResolversParentTypes['User']>
  }
  Group: Omit<Group, 'linkedChats' | 'linkedEvents' | 'members' | 'owner'> & {
    linkedChats?: Maybe<Array<ResolversParentTypes['Chat']>>
    linkedEvents?: Maybe<Array<ResolversParentTypes['Event']>>
    members?: Maybe<Array<ResolversParentTypes['GroupMember']>>
    owner?: Maybe<ResolversParentTypes['User']>
  }
  GroupMember: Omit<GroupMember, 'group' | 'user'> & {
    group?: Maybe<ResolversParentTypes['Group']>
    user?: Maybe<ResolversParentTypes['User']>
  }
  Inbox: Omit<Inbox, 'user'> & { user?: Maybe<ResolversParentTypes['User']> }
  Message: Omit<Message, 'chat' | 'user'> & {
    chat?: Maybe<ResolversParentTypes['Chat']>
    user?: Maybe<ResolversParentTypes['User']>
  }
  Mutation: {}
  Boolean: Scalars['Boolean']['output']
  Query: {}
  Rating: Omit<Rating, 'rated' | 'rater'> & {
    rated?: Maybe<ResolversParentTypes['User']>
    rater?: Maybe<ResolversParentTypes['User']>
  }
  Int: Scalars['Int']['output']
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
    | 'inbox'
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
    inbox?: Maybe<Array<ResolversParentTypes['Inbox']>>
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
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>
  eventId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
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
  ownerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  settings?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ChatMemberResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['ChatMember'] = ResolversParentTypes['ChatMember'],
> = {
  chat?: Resolver<Maybe<ResolversTypes['Chat']>, ParentType, ContextType>
  chatId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  permissions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CommentResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment'],
> = {
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>
  eventId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
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
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>
  categoryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  comments?: Resolver<Maybe<Array<ResolversTypes['Comment']>>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  dateEnd?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>
  dateStart?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  linkedChats?: Resolver<Maybe<Array<ResolversTypes['Chat']>>, ParentType, ContextType>
  linkedGroups?: Resolver<Maybe<Array<ResolversTypes['Group']>>, ParentType, ContextType>
  members?: Resolver<Maybe<Array<ResolversTypes['EventMember']>>, ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  owner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  ownerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  settings?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type EventMemberResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['EventMember'] = ResolversParentTypes['EventMember'],
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>
  eventId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  permissions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
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
  ownerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  settings?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type GroupMemberResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['GroupMember'] = ResolversParentTypes['GroupMember'],
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  group?: Resolver<Maybe<ResolversTypes['Group']>, ParentType, ContextType>
  groupId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  permissions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type InboxResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['Inbox'] = ResolversParentTypes['Inbox'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MessageResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message'],
> = {
  chat?: Resolver<Maybe<ResolversTypes['Chat']>, ParentType, ContextType>
  chatId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MutationResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  chat_create?: Resolver<
    ResolversTypes['Chat'],
    ParentType,
    ContextType,
    RequireFields<Mutationchat_createArgs, 'name'>
  >
  chat_delete?: Resolver<ResolversTypes['Chat'], ParentType, ContextType, RequireFields<Mutationchat_deleteArgs, 'id'>>
  chat_link_event?: Resolver<
    ResolversTypes['Chat'],
    ParentType,
    ContextType,
    RequireFields<Mutationchat_link_eventArgs, 'chatId' | 'eventId'>
  >
  chat_link_group?: Resolver<
    ResolversTypes['Chat'],
    ParentType,
    ContextType,
    RequireFields<Mutationchat_link_groupArgs, 'chatId' | 'groupId'>
  >
  chat_member_accept?: Resolver<
    ResolversTypes['ChatMember'],
    ParentType,
    ContextType,
    RequireFields<Mutationchat_member_acceptArgs, 'chatId' | 'userId'>
  >
  chat_member_join?: Resolver<
    ResolversTypes['ChatMember'],
    ParentType,
    ContextType,
    RequireFields<Mutationchat_member_joinArgs, 'chatId'>
  >
  chat_member_kick?: Resolver<
    ResolversTypes['ChatMember'],
    ParentType,
    ContextType,
    RequireFields<Mutationchat_member_kickArgs, 'chatId' | 'userId'>
  >
  chat_member_leave?: Resolver<
    ResolversTypes['ChatMember'],
    ParentType,
    ContextType,
    RequireFields<Mutationchat_member_leaveArgs, 'chatId'>
  >
  chat_member_perm_add?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<Mutationchat_member_perm_addArgs, 'chatId' | 'permission' | 'userId'>
  >
  chat_member_perm_remove?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<Mutationchat_member_perm_removeArgs, 'chatId' | 'permission' | 'userId'>
  >
  chat_message_delete?: Resolver<
    ResolversTypes['Message'],
    ParentType,
    ContextType,
    RequireFields<Mutationchat_message_deleteArgs, 'messageId'>
  >
  chat_message_send?: Resolver<
    ResolversTypes['Message'],
    ParentType,
    ContextType,
    RequireFields<Mutationchat_message_sendArgs, 'chatId' | 'message'>
  >
  chat_settings_add?: Resolver<
    ResolversTypes['Chat'],
    ParentType,
    ContextType,
    RequireFields<Mutationchat_settings_addArgs, 'chatId' | 'setting'>
  >
  chat_settings_remove?: Resolver<
    ResolversTypes['Chat'],
    ParentType,
    ContextType,
    RequireFields<Mutationchat_settings_removeArgs, 'chatId' | 'setting'>
  >
  event_create?: Resolver<
    ResolversTypes['Event'],
    ParentType,
    ContextType,
    RequireFields<Mutationevent_createArgs, 'address' | 'categoryId' | 'dateStart' | 'description' | 'image' | 'name'>
  >
  event_delete?: Resolver<
    ResolversTypes['Event'],
    ParentType,
    ContextType,
    RequireFields<Mutationevent_deleteArgs, 'id'>
  >
  event_link_chat?: Resolver<
    ResolversTypes['Event'],
    ParentType,
    ContextType,
    RequireFields<Mutationevent_link_chatArgs, 'chatId' | 'eventId'>
  >
  event_link_group?: Resolver<
    ResolversTypes['Event'],
    ParentType,
    ContextType,
    RequireFields<Mutationevent_link_groupArgs, 'eventId' | 'groupId'>
  >
  event_member_accept?: Resolver<
    ResolversTypes['EventMember'],
    ParentType,
    ContextType,
    RequireFields<Mutationevent_member_acceptArgs, 'eventId' | 'userId'>
  >
  event_member_join?: Resolver<
    ResolversTypes['EventMember'],
    ParentType,
    ContextType,
    RequireFields<Mutationevent_member_joinArgs, 'eventId'>
  >
  event_member_kick?: Resolver<
    ResolversTypes['EventMember'],
    ParentType,
    ContextType,
    RequireFields<Mutationevent_member_kickArgs, 'eventId' | 'userId'>
  >
  event_member_leave?: Resolver<
    ResolversTypes['EventMember'],
    ParentType,
    ContextType,
    RequireFields<Mutationevent_member_leaveArgs, 'eventId'>
  >
  event_member_perm_add?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<Mutationevent_member_perm_addArgs, 'eventId' | 'permission' | 'userId'>
  >
  event_member_perm_remove?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<Mutationevent_member_perm_removeArgs, 'eventId' | 'permission' | 'userId'>
  >
  event_settings_add?: Resolver<
    ResolversTypes['Event'],
    ParentType,
    ContextType,
    RequireFields<Mutationevent_settings_addArgs, 'eventId' | 'setting'>
  >
  event_settings_remove?: Resolver<
    ResolversTypes['Event'],
    ParentType,
    ContextType,
    RequireFields<Mutationevent_settings_removeArgs, 'eventId' | 'setting'>
  >
  test?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
}

export type QueryResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  chat_get_as_member?: Resolver<Maybe<Array<ResolversTypes['Chat']>>, ParentType, ContextType>
  chat_get_as_owner?: Resolver<Maybe<Array<ResolversTypes['Chat']>>, ParentType, ContextType>
  chat_get_events?: Resolver<
    Maybe<Array<ResolversTypes['Event']>>,
    ParentType,
    ContextType,
    RequireFields<Querychat_get_eventsArgs, 'chatId'>
  >
  chat_get_groups?: Resolver<
    Maybe<Array<ResolversTypes['Group']>>,
    ParentType,
    ContextType,
    RequireFields<Querychat_get_groupsArgs, 'chatId'>
  >
  chat_get_members?: Resolver<
    Maybe<Array<ResolversTypes['ChatMember']>>,
    ParentType,
    ContextType,
    RequireFields<Querychat_get_membersArgs, 'chatId'>
  >
  test?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
}

export type RatingResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['Rating'] = ResolversParentTypes['Rating'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  rate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  rated?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  ratedId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  rater?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  raterId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type UserResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = {
  appPermissions?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
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
  inbox?: Resolver<Maybe<Array<ResolversTypes['Inbox']>>, ParentType, ContextType>
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
  Inbox?: InboxResolvers<ContextType>
  Message?: MessageResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  Rating?: RatingResolvers<ContextType>
  Upload?: GraphQLScalarType
  User?: UserResolvers<ContextType>
}
