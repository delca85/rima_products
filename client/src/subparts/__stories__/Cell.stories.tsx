import React from 'react';
import Cell, { ICellProps } from '../Cell';

export default {
  title: 'Cell',
  component: Cell,
};

export const CellHeader: React.FunctionComponent<ICellProps> = () => <Cell header text="name" />;

export const CellTextLong: React.FunctionComponent<ICellProps> = () => (
  <Cell text="header with a long long long too long text" />
);
