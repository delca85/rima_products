import { default as React } from 'react';
import styled from 'styled-components';
import { IRimaComponentProps } from '../types/component.types';

export interface ICellProps extends IRimaComponentProps {
  text?: string | number;
  header?: boolean;
  img?: boolean;
}

const CellRaw = ({ className, text, header = false }: ICellProps) => {
  return header ? <th className={className}>{text}</th> : <td className={className}>{text}</td>;
};

const Cell = styled(CellRaw)`
  vertical-align: middle;
  border: 1px solid #f4f6f8;
  padding: 4px;
  max-width: 200px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export default Cell;
