/* eslint-disable */
import * as types from './graphql'
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  'mutation CreateEvent($title: String!, $description: String!, $date: DateTime!, $image: Upload!, $address: String!, $categoryName: String!) {\n  createEvent(\n    title: $title\n    description: $description\n    date: $date\n    image: $image\n    address: $address\n    categoryName: $categoryName\n  ) {\n    id\n  }\n}\n\nmutation SubscribeEvent($eventId: ID!) {\n  subscribe(eventId: $eventId) {\n    id\n  }\n}\n\nmutation Login($email: String!) {\n  login(email: $email) {\n    id\n    username\n    email\n    createdAt\n  }\n}\n\nmutation Register($username: String!, $password: String!, $email: String!) {\n  register(username: $username, password: $password, email: $email) {\n    id\n    username\n    email\n    createdAt\n  }\n}\n\nmutation UploadFile($file: Upload!, $test: String!) {\n  testUpload(file: $file, test: $test)\n}': typeof types.CreateEventDocument
  'query Events {\n  events {\n    id\n    title\n    description\n    date\n    image\n    address\n    creator {\n      username\n      id\n    }\n    announces {\n      title\n      description\n    }\n    participants {\n      username\n    }\n  }\n}\n\nquery MyEvents {\n  myEvents {\n    id\n    title\n    description\n    date\n    image\n    address\n    creator {\n      username\n      id\n    }\n    announces {\n      title\n      description\n    }\n    participants {\n      username\n    }\n  }\n}\n\nquery Event($eventId: ID!) {\n  event(eventId: $eventId) {\n    id\n    title\n    description\n    date\n    image\n    address\n    creator {\n      username\n      id\n    }\n    announces {\n      title\n      description\n    }\n    participants {\n      username\n    }\n    category {\n      name\n    }\n  }\n}\n\nquery Me {\n  me {\n    username\n    id\n  }\n}\n\nquery Categorys {\n  categories {\n    name\n  }\n}': typeof types.EventsDocument
}
const documents: Documents = {
  'mutation CreateEvent($title: String!, $description: String!, $date: DateTime!, $image: Upload!, $address: String!, $categoryName: String!) {\n  createEvent(\n    title: $title\n    description: $description\n    date: $date\n    image: $image\n    address: $address\n    categoryName: $categoryName\n  ) {\n    id\n  }\n}\n\nmutation SubscribeEvent($eventId: ID!) {\n  subscribe(eventId: $eventId) {\n    id\n  }\n}\n\nmutation Login($email: String!) {\n  login(email: $email) {\n    id\n    username\n    email\n    createdAt\n  }\n}\n\nmutation Register($username: String!, $password: String!, $email: String!) {\n  register(username: $username, password: $password, email: $email) {\n    id\n    username\n    email\n    createdAt\n  }\n}\n\nmutation UploadFile($file: Upload!, $test: String!) {\n  testUpload(file: $file, test: $test)\n}':
    types.CreateEventDocument,
  'query Events {\n  events {\n    id\n    title\n    description\n    date\n    image\n    address\n    creator {\n      username\n      id\n    }\n    announces {\n      title\n      description\n    }\n    participants {\n      username\n    }\n  }\n}\n\nquery MyEvents {\n  myEvents {\n    id\n    title\n    description\n    date\n    image\n    address\n    creator {\n      username\n      id\n    }\n    announces {\n      title\n      description\n    }\n    participants {\n      username\n    }\n  }\n}\n\nquery Event($eventId: ID!) {\n  event(eventId: $eventId) {\n    id\n    title\n    description\n    date\n    image\n    address\n    creator {\n      username\n      id\n    }\n    announces {\n      title\n      description\n    }\n    participants {\n      username\n    }\n    category {\n      name\n    }\n  }\n}\n\nquery Me {\n  me {\n    username\n    id\n  }\n}\n\nquery Categorys {\n  categories {\n    name\n  }\n}':
    types.EventsDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation CreateEvent($title: String!, $description: String!, $date: DateTime!, $image: Upload!, $address: String!, $categoryName: String!) {\n  createEvent(\n    title: $title\n    description: $description\n    date: $date\n    image: $image\n    address: $address\n    categoryName: $categoryName\n  ) {\n    id\n  }\n}\n\nmutation SubscribeEvent($eventId: ID!) {\n  subscribe(eventId: $eventId) {\n    id\n  }\n}\n\nmutation Login($email: String!) {\n  login(email: $email) {\n    id\n    username\n    email\n    createdAt\n  }\n}\n\nmutation Register($username: String!, $password: String!, $email: String!) {\n  register(username: $username, password: $password, email: $email) {\n    id\n    username\n    email\n    createdAt\n  }\n}\n\nmutation UploadFile($file: Upload!, $test: String!) {\n  testUpload(file: $file, test: $test)\n}',
): (typeof documents)['mutation CreateEvent($title: String!, $description: String!, $date: DateTime!, $image: Upload!, $address: String!, $categoryName: String!) {\n  createEvent(\n    title: $title\n    description: $description\n    date: $date\n    image: $image\n    address: $address\n    categoryName: $categoryName\n  ) {\n    id\n  }\n}\n\nmutation SubscribeEvent($eventId: ID!) {\n  subscribe(eventId: $eventId) {\n    id\n  }\n}\n\nmutation Login($email: String!) {\n  login(email: $email) {\n    id\n    username\n    email\n    createdAt\n  }\n}\n\nmutation Register($username: String!, $password: String!, $email: String!) {\n  register(username: $username, password: $password, email: $email) {\n    id\n    username\n    email\n    createdAt\n  }\n}\n\nmutation UploadFile($file: Upload!, $test: String!) {\n  testUpload(file: $file, test: $test)\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Events {\n  events {\n    id\n    title\n    description\n    date\n    image\n    address\n    creator {\n      username\n      id\n    }\n    announces {\n      title\n      description\n    }\n    participants {\n      username\n    }\n  }\n}\n\nquery MyEvents {\n  myEvents {\n    id\n    title\n    description\n    date\n    image\n    address\n    creator {\n      username\n      id\n    }\n    announces {\n      title\n      description\n    }\n    participants {\n      username\n    }\n  }\n}\n\nquery Event($eventId: ID!) {\n  event(eventId: $eventId) {\n    id\n    title\n    description\n    date\n    image\n    address\n    creator {\n      username\n      id\n    }\n    announces {\n      title\n      description\n    }\n    participants {\n      username\n    }\n    category {\n      name\n    }\n  }\n}\n\nquery Me {\n  me {\n    username\n    id\n  }\n}\n\nquery Categorys {\n  categories {\n    name\n  }\n}',
): (typeof documents)['query Events {\n  events {\n    id\n    title\n    description\n    date\n    image\n    address\n    creator {\n      username\n      id\n    }\n    announces {\n      title\n      description\n    }\n    participants {\n      username\n    }\n  }\n}\n\nquery MyEvents {\n  myEvents {\n    id\n    title\n    description\n    date\n    image\n    address\n    creator {\n      username\n      id\n    }\n    announces {\n      title\n      description\n    }\n    participants {\n      username\n    }\n  }\n}\n\nquery Event($eventId: ID!) {\n  event(eventId: $eventId) {\n    id\n    title\n    description\n    date\n    image\n    address\n    creator {\n      username\n      id\n    }\n    announces {\n      title\n      description\n    }\n    participants {\n      username\n    }\n    category {\n      name\n    }\n  }\n}\n\nquery Me {\n  me {\n    username\n    id\n  }\n}\n\nquery Categorys {\n  categories {\n    name\n  }\n}']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
