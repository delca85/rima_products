import { default as React } from 'react';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router-dom';

const routerDomDecorator = (storyFn) => (
  <Router history={createMemoryHistory({ initialEntries: ['/FAKE_URL'] })}>
    <Route path="/" component={() => storyFn()} />
  </Router>
);

export default routerDomDecorator;
