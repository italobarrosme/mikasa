import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.API_URL,
  headers: {
    authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache()
})