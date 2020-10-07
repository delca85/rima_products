import { default as React } from 'react';
import styled from 'styled-components';
import { IRimaComponentProps } from '../types/component.types';

const FooterIconLicenseRaw = ({ className }: IRimaComponentProps) => (
  <footer className={className}>
    Icons made by{' '}
    <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
      Freepik
    </a>{' '}
    from
    <a href="https://www.flaticon.com/" title="Flaticon">
      {' '}
      www.flaticon.com
    </a>
  </footer>
);

const FooterIconLicense = styled(FooterIconLicenseRaw)`
  bottom: 0;
  font-size: 0.7rem;
`;

export default FooterIconLicense;
