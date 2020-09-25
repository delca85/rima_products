import { default as React } from 'react';
import styled from 'styled-components';
import { IPartComponentProps } from '../types/component.types';

const MacroProductRaw = ({ className, id, name, thumb = '' }: IPartComponentProps) => (
  <div className={className}>
    <h2 className="macro-product-name">{name}</h2>
    <img src={thumb} alt={`Product with id: ${id}`} />
  </div>
);

const MacroProduct = styled(MacroProductRaw)`
  text-align: center;
  text-transform: capitalize;
`;

export default MacroProduct;
