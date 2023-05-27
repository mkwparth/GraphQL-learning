import DisplayData from "./Components/DisplayData";
import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client'

function App() {
  const client= new ApolloClient({
    uri:"http://localhost:4000/graphql",
    cache:new InMemoryCache()
  })
  return (
    <ApolloProvider client={client}>
    <div className="App">
        <DisplayData/>
    </div>
    </ApolloProvider>
  );
}

export default App;
