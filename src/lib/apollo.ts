import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4prprb4251o01xx7ye7dkw7/master",

  cache: new InMemoryCache(),
});
