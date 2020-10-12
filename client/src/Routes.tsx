import { default as React } from 'react';
import { Route, Switch } from 'react-router-dom';
import useGoogleAnalytics from './analytics/useGoogleAnalytics';
import Home from './common/Home';
import NoMatchingRoute from './common/NoMatchingRoute';
import MacroProductContainer from './macro-product/MacroProductContainer';

const Routes = () => {
  useGoogleAnalytics();

  return (
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
  );
};

export default Routes;
