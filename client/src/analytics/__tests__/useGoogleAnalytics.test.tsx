import { default as React } from 'react';
import { createMemoryHistory } from 'history';
import analytics from '../analytics';
import useGoogleAnalytics from '../useGoogleAnalytics';
import { Route, Router } from 'react-router-dom';
import { render } from '@testing-library/react';

const history = createMemoryHistory({ initialEntries: ['/FAKE_HOME'] });
const Example = () => {
  useGoogleAnalytics();

  return (
    <Route path="/FAKE_HOME">
      <div>Example</div>
    </Route>
  );
};

describe('useGoogleAnalytics hook', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should init analytics on mount', () => {
    const mockedInit = jest.spyOn(analytics, 'init');
    mockedInit.mockReturnValueOnce();
    jest.spyOn(analytics, 'sendPageview').mockReturnValueOnce();

    render(
      <Router history={history}>
        <Example />
      </Router>,
    );

    expect(mockedInit).toHaveBeenCalledTimes(1);
  });
});
