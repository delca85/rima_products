import { default as React } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IRimaComponentProps } from '../types/component.types';

const HomeRaw = ({ className }: IRimaComponentProps) => (
  <div className={className}>
    <Link
      to={{
        pathname: '/macro_product/1',
      }}>
      Macro product with id: 1
    </Link>
  </div>
);

const Home = styled(HomeRaw)`
  max-width: 100vw;
`;

export default Home;
