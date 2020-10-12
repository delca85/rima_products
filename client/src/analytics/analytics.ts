import ReactGA from 'react-ga';
import environment from '../configuration/environment';
import { IAnalyticsEvent } from './analytics.types';

export const TRACKING_ID = 'UA-180260831-1';

const init = (): void => ReactGA.initialize(TRACKING_ID, { debug: environment.isBeta() });

const sendEvent = (event: IAnalyticsEvent): void => ReactGA.event(event);

const sendPageview = (path: string): void => {
  ReactGA.set({ page: path });
  ReactGA.pageview(path);
};

export default {
  init,
  sendEvent,
  sendPageview,
};
