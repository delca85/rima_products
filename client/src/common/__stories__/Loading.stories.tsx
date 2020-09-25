import React from 'react';
import { IRimaComponentProps } from '../../types/component.types';
import Loading from '../Loading';

export default {
  title: 'Loading',
  component: Loading,
};

export const LoadingDefault: React.FunctionComponent<IRimaComponentProps> = () => <Loading />;
