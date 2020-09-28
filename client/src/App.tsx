import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './common/Home';
import RimaApolloProvider from './apollo/RimaApolloProvider';
import MacroProductContainer from './macro-product/MacroProductContainer';
import NoMatchingRoute from './common/NoMatchingRoute';
const App = () => (
  <RimaApolloProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/macro_product/:id">
          <MacroProductContainer />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <NoMatchingRoute />
        </Route>
      </Switch>
    </BrowserRouter>
  </RimaApolloProvider>
);

export default App;
