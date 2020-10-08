import { default as React } from 'react';
import { render } from '@testing-library/react';
import DownloadItems from '../DownloadItems';

describe('DownloadItems component', () => {
  it('should render manual and drawings when provided', () => {
    const { getByText } = render(<DownloadItems manual="FAKE_MANUAL" drawings="FAKE_DRAWINGS" />);

    expect(getByText('Download Manual')).toBeDefined();
    expect(getByText('Download Drawings')).toBeDefined();
  });

  it('should render manual but no drawings when the second is not provided', () => {
    const { getByText, queryByText } = render(<DownloadItems manual="FAKE_MANUAL" />);

    expect(getByText('Download Manual')).toBeDefined();
    expect(queryByText('Download Drawings')).toBeNull();
  });

  it('should render drawings but no manual when the second is not provided', () => {
    const { getByText, queryByText } = render(<DownloadItems drawings="FAKE_DRAWINGS" />);

    expect(queryByText('Download Manual')).toBeNull();
    expect(getByText('Download Drawings')).toBeDefined();
  });

  it('should not render drawings or manual when they are not provided', () => {
    const { queryByText } = render(<DownloadItems />);

    expect(queryByText('Download Manual')).toBeNull();
    expect(queryByText('Download Drawings')).toBeNull();
  });
});
