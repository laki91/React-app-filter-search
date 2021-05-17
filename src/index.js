import { ApolloProvider } from '@apollo/react-common'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const cache = new InMemoryCache()
const link = new HttpLink({
    uri: 'https://graphqlzero.almansi.me/api'
})

const client = new ApolloClient({cache, link})


ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, document.querySelector('.root')
)
    