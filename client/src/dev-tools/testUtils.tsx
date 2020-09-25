import { default as React } from 'react';
import { createMemoryHistory, MemoryHistory, State } from 'history';
import { Route, Router } from 'react-router-dom';
import { render } from '@testing-library/react';

interface IRoute {
  route?: string;
  path?: string;
  history?: MemoryHistory<State>;
}

const renderWithRouter = (component: React.ReactNode, routeHistory?: IRoute) => {
  const route = routeHistory?.route || '/';
  const path = routeHistory?.path || '/';
  const history = routeHistory?.history || createMemoryHistory({ initialEntries: [route] });
  return {
    ...render(
      <Router history={history}>
        <Route path={path}>{component}</Route>
      </Router>,
    ),
  };
};

export default renderWithRouter;
