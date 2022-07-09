import Screens from './src/screens';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import getEnvVars from "./config";
const { API_URI } = getEnvVars();

const uri = API_URI;
console.log(uri)
const cache = new InMemoryCache();

const client = new ApolloClient({
    uri,
    cache
});

export default function App() {
    return (
        <ApolloProvider client={client}>
            <Screens />
        </ApolloProvider>
    )
};