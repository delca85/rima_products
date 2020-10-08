import React from 'react';
import { IRimaComponentProps } from '../../types/component.types';
import DownloadItems from '../DownloadItems';

export default {
  title: 'DownloadItems',
  component: DownloadItems,
};

export const DownloadItemsWithManualAndDrawings: React.FunctionComponent<IRimaComponentProps> = () => (
  <DownloadItems manual="FAKE_MANUAL" drawings="FAKE_DRAWINGS" />
);

export const DownloadItemsWithManualAndNoDrawings: React.FunctionComponent<IRimaComponentProps> = () => (
  <DownloadItems manual="FAKE_MANUAL" />
);

export const DownloadItemsWithNoManualAndDrawings: React.FunctionComponent<IRimaComponentProps> = () => (
  <DownloadItems drawings="FAKE_DRAWINGS" />
);

export const DownloadItemsWithNoManualAndNoDrawings: React.FunctionComponent<IRimaComponentProps> = () => (
  <DownloadItems />
);
