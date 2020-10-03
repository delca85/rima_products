import { default as React } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { IRimaComponentProps } from '../types/component.types';

const NoMatchingRouteRaw = ({ className }: IRimaComponentProps) => {
  const location = useLocation();
  return (
    <div className={className}>
      <span>{`No page with this url: ${location.pathname}!`}</span>
    </div>
  );
};

const NoMatchingRoute = styled(NoMatchingRouteRaw)`
  max-width: 100vw;
`;

export default NoMatchingRoute;
