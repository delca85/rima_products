import React from 'react';
import SubpartsTableHeader, { ISubpartsTableHeaderProps } from '../SubpartsTableHeader';

export default {
  title: 'SubpartsTableHeader',
  component: SubpartsTableHeader,
};

export const SubpartsTableHeaderDefault: React.FunctionComponent<ISubpartsTableHeaderProps> = () => (
  <SubpartsTableHeader headings={['id', 'name', 'quantity', 'image']} />
);

export const SubpartsTableHeaderNoHeader: React.FunctionComponent<ISubpartsTableHeaderProps> = () => (
  <SubpartsTableHeader headings={[]} />
);
