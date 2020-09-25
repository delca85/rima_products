import { default as React } from 'react';
import { IPartComponentProps } from '../types/component.types';
import Cell from './Cell';
import CellImg from './CellImg';

const Subpart = ({ className, id, name, thumb, quantity = 1 }: IPartComponentProps) => {
  return (
    <tr className={className}>
      <Cell text={id} />
      <Cell text={name} />
      <Cell text={quantity} />
      <CellImg src={thumb} altText={`Subpart with id: ${id}`} />
    </tr>
  );
};

export default Subpart;
