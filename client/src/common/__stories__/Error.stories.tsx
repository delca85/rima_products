import React from 'react';
import { IRimaComponentProps } from '../../types/component.types';
import Error from '../Error';

export default {
  title: 'Error',
  component: Error,
};

export const ErrorDefault: React.FunctionComponent<IRimaComponentProps> = () => <Error />;
