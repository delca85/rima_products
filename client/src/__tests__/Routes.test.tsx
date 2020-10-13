import { default as React } from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Routes from '../Routes';
import analytics from '../analytics/analytics';
import { act } from 'react-dom/test-utils';

jest.mock('../analytics/analytics');

describe('Routes component', () => {
  afterEach(() => jest.clearAllMocks());
  it('should render all the desired paths', () => {
    const { container } = render(
      <Router>
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
    const mockedInit = analytics.init as jest.MockedFunction<typeof analytics.init>;
    // mockedInit.mockReturnValueOnce();
    // jest.spyOn(analytics, 'sendPageview').mockReturnValueOnce();

    render(
      <Router>
        <Routes />
      </Router>,
    );

    expect(mockedInit).toHaveBeenCalledTimes(1);
  });

  it('should set new page view when location changes ', () => {
    const mockedSendPageview = analytics.sendPageview as jest.MockedFunction<
      typeof analytics.sendPageview
    >;
    mockedSendPageview.mockImplementation();

    const MyComponent = () => {
      const history = useHistory();
      return (
        <div data-testid="change-history" onClick={() => history.push('/NEW_LOCATION')}>
          <Routes />
        </div>
      );
    };

    const { getByTestId } = render(
      <Router>
        <MyComponent />
      </Router>,
    );

    mockedSendPageview.mockClear();

    act(() => userEvent.click(getByTestId('change-history')));

    expect(mockedSendPageview).toHaveBeenCalledTimes(1);
    expect(mockedSendPageview).toHaveBeenCalledWith('/NEW_LOCATION');
  });
});
