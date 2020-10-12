import { default as React } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RimaApolloProvider from './apollo/RimaApolloProvider';
import Routes from './Routes';

const App = () => (
  <RimaApolloProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </RimaApolloProvider>
);

export default App;
