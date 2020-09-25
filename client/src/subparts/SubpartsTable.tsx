import { default as React } from 'react';
import styled from 'styled-components';
import { IPartComponentProps, IRimaComponentProps } from '../types/component.types';
import Subpart from './Subpart';
import SubpartsTableHeader from './SubpartsTableHeader';

export interface ISubpartsTableProps extends IRimaComponentProps {
  subparts: IPartComponentProps[];
}

const SUBPARTS_TABLE_HEADINGS = ['id', 'name', 'quantity', 'image'];
export const SUBPARTS_TABLE_TITLE = 'Subparts';

const SubpartsTableRaw = ({ className, subparts }: ISubpartsTableProps) =>
  subparts.length ? (
    <div className={className}>
      <div className="scroll-container">
        <h2>{SUBPARTS_TABLE_TITLE}</h2>
        <table className="table">
          <thead>
            <SubpartsTableHeader headings={SUBPARTS_TABLE_HEADINGS} />
          </thead>
          <tbody>
            {subparts.map(({ id, name, quantity, thumb }) => (
              <Subpart key={id} id={id} name={name} quantity={quantity} thumb={thumb} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : null;
const SubpartsTable = styled(SubpartsTableRaw)`
  max-width: 100vw;
  .scroll-container {
    overflow-x: auto;
  }
  .table {
    border-spacing: 0px;
    background: #fff;
    box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);
    /* width: 100%; */
  }
`;

export default SubpartsTable;
