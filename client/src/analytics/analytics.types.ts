export type tAnalyticsEventCategory = 'user';

export interface IAnalyticsEvent {
  category: tAnalyticsEventCategory;
  action: string;
  label?: string;
}
