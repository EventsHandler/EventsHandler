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
  DateTime: { input: Date | string; output: Date | string }
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
  date: Scalars['DateTime']['input']
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
  date: Scalars['DateTime']['input']
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
  Announces: ResolverTypeWrapper<Omit<Announces, 'event'> & { event?: Maybe<ResolversTypes['Event']> }>
  String: ResolverTypeWrapper<Scalars['String']['output']>
  Category: ResolverTypeWrapper<Omit<Category, 'events'> & { events?: Maybe<Array<ResolversTypes['Event']>> }>
  ID: ResolverTypeWrapper<Scalars['ID']['output']>
  Comment: ResolverTypeWrapper<
    Omit<Comment, 'event' | 'from'> & { event: ResolversTypes['Event']; from: ResolversTypes['User'] }
  >
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>
  Event: ResolverTypeWrapper<EventMapper>
  Mutation: ResolverTypeWrapper<{}>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>
  Int: ResolverTypeWrapper<Scalars['Int']['output']>
  Query: ResolverTypeWrapper<{}>
  Rateing: ResolverTypeWrapper<Rateing>
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>
  User: ResolverTypeWrapper<
    Omit<User, 'comments' | 'createdEvents' | 'events'> & {
      comments?: Maybe<Array<ResolversTypes['Comment']>>
      createdEvents?: Maybe<Array<ResolversTypes['Event']>>
      events?: Maybe<Array<ResolversTypes['Event']>>
    }
  >
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Announces: Omit<Announces, 'event'> & { event?: Maybe<ResolversParentTypes['Event']> }
  String: Scalars['String']['output']
  Category: Omit<Category, 'events'> & { events?: Maybe<Array<ResolversParentTypes['Event']>> }
  ID: Scalars['ID']['output']
  Comment: Omit<Comment, 'event' | 'from'> & {
    event: ResolversParentTypes['Event']
    from: ResolversParentTypes['User']
  }
  DateTime: Scalars['DateTime']['output']
  Event: EventMapper
  Mutation: {}
  Boolean: Scalars['Boolean']['output']
  Int: Scalars['Int']['output']
  Query: {}
  Rateing: Rateing
  Upload: Scalars['Upload']['output']
  User: Omit<User, 'comments' | 'createdEvents' | 'events'> & {
    comments?: Maybe<Array<ResolversParentTypes['Comment']>>
    createdEvents?: Maybe<Array<ResolversParentTypes['Event']>>
    events?: Maybe<Array<ResolversParentTypes['Event']>>
  }
}

export type AnnouncesResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['Announces'] = ResolversParentTypes['Announces'],
> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
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

export type CommentResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment'],
> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  event?: Resolver<ResolversTypes['Event'], ParentType, ContextType>
  from?: Resolver<ResolversTypes['User'], ParentType, ContextType>
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
  announces?: Resolver<Maybe<Array<ResolversTypes['Announces']>>, ParentType, ContextType>
  category?: Resolver<ResolversTypes['Category'], ParentType, ContextType>
  comments?: Resolver<Maybe<Array<ResolversTypes['Comment']>>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  creator?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  participants?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
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
    ResolversTypes['Announces'],
    ParentType,
    ContextType,
    RequireFields<MutationcreateAnnounceArgs, 'description' | 'eventId' | 'title'>
  >
  createEvent?: Resolver<
    ResolversTypes['Event'],
    ParentType,
    ContextType,
    RequireFields<MutationcreateEventArgs, 'address' | 'categoryName' | 'date' | 'description' | 'image' | 'title'>
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
    RequireFields<MutationeditEventArgs, 'address' | 'categoryName' | 'date' | 'description' | 'eventId' | 'title'>
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

export type RateingResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['Rateing'] = ResolversParentTypes['Rateing'],
> = {
  fromId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  rate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  toId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type UserResolvers<
  ContextType = UserContext,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = {
  comments?: Resolver<Maybe<Array<ResolversTypes['Comment']>>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  createdEvents?: Resolver<Maybe<Array<ResolversTypes['Event']>>, ParentType, ContextType>
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  events?: Resolver<Maybe<Array<ResolversTypes['Event']>>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  myRates?: Resolver<Maybe<Array<ResolversTypes['Rateing']>>, ParentType, ContextType>
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  rates?: Resolver<Maybe<Array<ResolversTypes['Rateing']>>, ParentType, ContextType>
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type Resolvers<ContextType = UserContext> = {
  Announces?: AnnouncesResolvers<ContextType>
  Category?: CategoryResolvers<ContextType>
  Comment?: CommentResolvers<ContextType>
  DateTime?: GraphQLScalarType
  Event?: EventResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  Rateing?: RateingResolvers<ContextType>
  Upload?: GraphQLScalarType
  User?: UserResolvers<ContextType>
}
