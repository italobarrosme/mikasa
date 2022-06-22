import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4omnvmb0ja601xl7loi0a1y/master',
  cache: new InMemoryCache()
})