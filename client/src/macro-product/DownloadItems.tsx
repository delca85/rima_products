import { default as React } from 'react';
import ReactTooltip from 'react-tooltip';
import { IRimaComponentProps } from '../types/component.types';
import manualSrc from '../assets/manual.svg';
import drawingsSrc from '../assets/drawings.svg';
import styled from 'styled-components';

export interface IDownloadItemsProps extends IRimaComponentProps {
  manual?: string;
  drawings?: string;
}

const DownloadItemsRaw = ({ className, manual = '', drawings = '' }: IDownloadItemsProps) => {
  // const onDownloadManual = useCallback
  return (
    <div className={className}>
      {manual && (
        <a data-tip data-for="manual-tip" href={manual} rel="noopener noreferrer" target="_blank">
          <ReactTooltip id="manual-tip" type="info">
            <span>Download Manual</span>
          </ReactTooltip>
          <img src={manualSrc} alt="Manual" />
        </a>
      )}
      {drawings && (
        <a
          data-tip
          data-for="drawings-tip"
          href={drawings}
          rel="noopener noreferrer"
          target="_blank">
          <ReactTooltip id="drawings-tip" type="info">
            <span>Download Drawings</span>
          </ReactTooltip>
          <img src={drawingsSrc} alt="Drawings" />
        </a>
      )}
    </div>
  );
};

const DownloadItems = styled(DownloadItemsRaw)`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  justify-content: start;
  a {
    margin: 0 10px;
    height: 4rem;
    display: flex;
    align-items: center;
  }
  img {
    width: auto;
    height: 50%;
    :hover {
      cursor: pointer;
    }
  }
`;

export default DownloadItems;
