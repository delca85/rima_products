import { default as React } from 'react';
import styled from 'styled-components';
import { IPartComponentProps } from '../types/component.types';
import DownloadItems from './DownloadItems';

const MacroProductRaw = ({ className, id, name, thumb = '' }: IPartComponentProps) => (
  <div className={className}>
    <div className="macro-product-name-downloads">
      <h2 className="macro-product-name">{name}</h2>
      <DownloadItems />
    </div>
    <img className="macro-product-image" src={thumb} alt={`Product with id: ${id}`} />
  </div>
);

const MacroProduct = styled(MacroProductRaw)`
  display: flex;
  flex-direction: column;
  .macro-product-name-downloads {
    display: flex;
    align-items: center;
    .macro-product-name {
      text-transform: capitalize;
    }
  }
  .macro-product-image {
    align-self: center;
  }
`;

export default MacroProduct;
