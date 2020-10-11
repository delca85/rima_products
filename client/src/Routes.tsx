import { default as React } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './common/Home';
import NoMatchingRoute from './common/NoMatchingRoute';
import MacroProductContainer from './macro-product/MacroProductContainer';

const Routes = () => (
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
);

export default Routes;
