import React from 'react';
import { IRimaComponentProps } from '../../types/component.types';
import DownloadItems from '../DownloadItems';

export default {
  title: 'DownloadItems',
  component: DownloadItems,
};

export const DownloadItemsDefault: React.FunctionComponent<IRimaComponentProps> = () => (
  <DownloadItems />
);
