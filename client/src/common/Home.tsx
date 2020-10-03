import { default as React } from 'react';
import styled from 'styled-components';
import { IRimaComponentProps } from '../types/component.types';

const HomeRaw = ({ className }: IRimaComponentProps) => (
  <div className={className}>
    <span>Under construction...</span>
  </div>
);

const Home = styled(HomeRaw)`
  max-width: 100vw;
`;

export default Home;
