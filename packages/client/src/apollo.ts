import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const link = createUploadLink({
  uri: '/graphql',
})

export const apolloClient = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
})
