import { default as React } from 'react';
import { IRimaComponentProps } from '../types/component.types';
import Cell from './Cell';

export interface ISubpartsTableHeaderProps extends IRimaComponentProps {
  headings: string[];
}
const SubpartsTableHeader = ({ headings }: ISubpartsTableHeaderProps) => (
  <tr>
    {headings.map((heading, index) => (
      <Cell header key={`${heading}-${index}`} text={heading} />
    ))}
  </tr>
);

export default SubpartsTableHeader;
