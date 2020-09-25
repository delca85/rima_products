import React from 'react';
import { IRimaComponentProps } from '../../types/component.types';
import Home from '../Home';

export default {
  title: 'Home',
  component: Home,
};

export const HomeDefault: React.FunctionComponent<IRimaComponentProps> = () => <Home />;
