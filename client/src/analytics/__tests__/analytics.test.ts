import ReactGA from 'react-ga';
import environment from '../../configuration/environment';
import analytics, { TRACKING_ID } from '../analytics';
import { IAnalyticsEvent } from '../analytics.types';

describe('analytics module', () => {
  it('should init a google analytics service with the right args (dev env)', () => {
    const mockedInitialize = jest.spyOn(ReactGA, 'initialize');
    mockedInitialize.mockReturnValueOnce();
    jest.spyOn(environment, 'isBeta').mockReturnValueOnce(true);

    analytics.init();

    expect(mockedInitialize).toHaveBeenCalledWith(TRACKING_ID, { debug: true });
  });

  it('should init a google analytics service with the right args (not dev env)', () => {
    const mockedInitialize = jest.spyOn(ReactGA, 'initialize');
    mockedInitialize.mockReturnValueOnce();
    jest.spyOn(environment, 'isBeta').mockReturnValueOnce(false);

    analytics.init();

    expect(mockedInitialize).toHaveBeenCalledWith(TRACKING_ID, { debug: false });
  });

  it('should send an event through ReactGA', () => {
    const mockSendEvent = jest.spyOn(ReactGA, 'event');
    mockSendEvent.mockReturnValueOnce();
    const mockEvent: IAnalyticsEvent = {
      category: 'user',
      action: 'download manual',
    };

    analytics.sendEvent(mockEvent);

    expect(mockSendEvent).toHaveBeenCalledWith(mockEvent);
  });

  it('should set custom domains and page view through ReactGA', () => {
    const mockSet = jest.spyOn(ReactGA, 'set');
    mockSet.mockReturnValueOnce();
    const mockedPageview = jest.spyOn(ReactGA, 'pageview');
    mockedPageview.mockReturnValueOnce();
    const path = 'FAKE_PATH';

    analytics.sendPageview(path);

    expect(mockSet).toHaveBeenCalledWith({ page: path });
    expect(mockedPageview).toHaveBeenCalledWith(path);
  });
});
