import { default as React } from 'react';
import ReactTooltip from 'react-tooltip';
import { IRimaComponentProps } from '../types/component.types';
import manual from '../assets/manual.svg';
import drawings from '../assets/drawings.svg';
import styled from 'styled-components';

const DownloadItemsRaw = ({ className }: IRimaComponentProps) => (
  <div className={className}>
    <a
      data-tip
      data-for="manual-tip"
      href="https://www.dropbox.com/s/boc8ids41qq4ysx/manual.pdf?dl=0"
      rel="noopener noreferrer"
      target="_blank">
      <ReactTooltip id="manual-tip" type="info">
        <span>Download Manual</span>
      </ReactTooltip>
      <img src={manual} alt="Manual" />
    </a>
    <a
      data-tip
      data-for="drawings-tip"
      href="https://www.dropbox.com/s/boc8ids41qq4ysx/manual.pdf?dl=0"
      rel="noopener noreferrer"
      target="_blank">
      <ReactTooltip id="drawings-tip" type="info">
        <span>Download Drawings</span>
      </ReactTooltip>
      <img src={drawings} alt="Drawings" />
    </a>
  </div>
);

const DownloadItems = styled(DownloadItemsRaw)`
  flex: 1;
  a {
    margin: 0 10px;
  }
  img {
    width: 5%;
    height: auto;
    :hover {
      cursor: pointer;
    }
  }
`;

export default DownloadItems;
