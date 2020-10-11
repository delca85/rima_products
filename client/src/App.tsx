import { default as React } from 'react';
import RimaApolloProvider from './apollo/RimaApolloProvider';
import Routes from './Routes';

const App = () => (
  <RimaApolloProvider>
    <Routes />
  </RimaApolloProvider>
);

export default App;
