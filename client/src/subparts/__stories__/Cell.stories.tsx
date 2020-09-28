import React from 'react';
import Cell, { ICellProps } from '../Cell';

export default {
  title: 'Cell',
  component: Cell,
  decorators: [
    (Story: React.ElementType) => (
      <table>
        <thead>
          <tr>
            <Story />
          </tr>
        </thead>
      </table>
    ),
  ],
};

export const CellHeader: React.FunctionComponent<ICellProps> = () => <Cell header text="name" />;

export const CellTextLong: React.FunctionComponent<ICellProps> = () => (
  <Cell text="header with a long long long too long text" />
);
