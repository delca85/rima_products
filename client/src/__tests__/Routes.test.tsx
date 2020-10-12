import { default as React } from 'react';
import { Router } from 'react-router-dom';
import renderWithRouter from '../dev-tools/testUtils';
import Routes from '../Routes';
import analytics from '../analytics/analytics';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { createBrowserHistory } from 'history';
import userEvent from '@testing-library/user-event';

describe('Routes component', () => {
  const history = createBrowserHistory();

  afterEach(() => jest.clearAllMocks());
  it('should render all the desired paths', () => {
    jest.spyOn(analytics, 'init').mockReturnValueOnce();
    jest.spyOn(analytics, 'sendPageview').mockReturnValueOnce();

    const { container } = render(
      <Router history={history}>
        <Routes />
      </Router>,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="sc-bdnylx eWauba"
        >
          <a
            href="/macro_product/1"
          >
            Macro product with id: 1
          </a>
        </div>
      </div>
    `);
  });

  it('should call useGoogleAnalytics hook on render', () => {
    const mockedInit = jest.spyOn(analytics, 'init');
    mockedInit.mockReturnValueOnce();
    jest.spyOn(analytics, 'sendPageview').mockReturnValueOnce();

    render(
      <Router history={history}>
        <Routes />
      </Router>,
    );

    expect(mockedInit).toHaveBeenCalledTimes(1);
  });

  // it('should set new page view when location changes ', () => {
  //   const mockedInit = jest.spyOn(analytics, 'init');
  //   mockedInit.mockReturnValueOnce();
  //   const mockedSendPageView = jest.spyOn(analytics, 'sendPageview');
  //   mockedSendPageView.mockReturnValueOnce();

  //   const { getByText } = render(
  //     <Router history={history}>
  //       <Routes />
  //       <button onClick={() => history.push('NEW_LOCATION')}>Click</button>
  //     </Router>,
  //   );
  //   mockedSendPageView.mockClear();
  //   mockedSendPageView.mockReturnValueOnce();

  //   userEvent.click(getByText('Click'));

  //   expect(mockedSendPageView).toHaveBeenCalledTimes(1);
  // });
});
