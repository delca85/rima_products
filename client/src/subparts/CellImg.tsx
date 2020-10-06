import { default as React } from 'react';
import styled from 'styled-components';
import { IRimaComponentProps } from '../types/component.types';

export interface ICellImgProps extends IRimaComponentProps {
  src?: string;
  altText: string;
}

const CellImgRaw = ({ className, src, altText }: ICellImgProps) => {
  if (src) {
    return (
      <td className={className}>
        <img src={src} alt={altText} />
      </td>
    );
  }
  return <td className={className}></td>;
};

const CellImg = styled(CellImgRaw)`
  vertical-align: middle;
  border: 1px solid #f4f6f8;
  padding: 4px;
  max-width: 3rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  img {
    width: 40%;
    height: auto;
  }
`;
export default CellImg;
