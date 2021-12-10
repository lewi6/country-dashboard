import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


const URI: string = process.env.URI!
const pass: string = process.env.HasuraAdminSecret!

const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': pass
  }
});
export default client;