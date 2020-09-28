import { default as React } from 'react';
import { IRimaComponentProps } from '../../types/component.types';
import NoMatchingRoute from '../NoMatchingRoute';

export default {
  title: 'NoMatchingRoute',
  component: NoMatchingRoute,
};

export const NoMatchDefault: React.FunctionComponent<IRimaComponentProps> = () => (
  <NoMatchingRoute />
);
