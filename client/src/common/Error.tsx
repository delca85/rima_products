import { default as React } from 'react';
import styled from 'styled-components';
import { IRimaComponentProps } from '../types/component.types';

const ErrorRaw = ({ className }: IRimaComponentProps) => <div className={className}>Error...</div>;

const Error = styled(ErrorRaw)`
  max-width: 100vw;
`;

export default Error;
