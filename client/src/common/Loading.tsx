import { default as React } from 'react';
import styled from 'styled-components';
import { IRimaComponentProps } from '../types/component.types';

const LoadingRaw = ({ className }: IRimaComponentProps) => (
  <div className={className}>Loading...</div>
);

const Loading = styled(LoadingRaw)`
  max-width: 100vw;
`;

export default Loading;
