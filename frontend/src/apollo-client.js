import Vue from 'vue'
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';

Vue.use(VueApollo);


const getHeaders = () => {
  const headers = {}
  const token = window.localStorage.getItem('apollo-token');
  if (token){
    headers.authorization = `Bearer ${token}`;
  }
  return headers;
}

const link = new HttpLink({
  uri: 'http://localhost:5000',
  fetch,
  headers: getHeaders()
});

const apolloClient = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    addTypename: true
  }),
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

export default apolloProvider;