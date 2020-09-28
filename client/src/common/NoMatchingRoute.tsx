import { default as React } from 'react';
import { useLocation } from 'react-router-dom';
import { IRimaComponentProps } from '../types/component.types';

const NoMatchingRoute = ({ className }: IRimaComponentProps) => {
  const location = useLocation();
  return (
    <div className={className}>
      <span>{`No page with this url: ${location.pathname}!`}</span>
    </div>
  );
};

export default NoMatchingRoute;
