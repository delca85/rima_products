import { default as React } from 'react';
import { render } from '@testing-library/react';
import DownloadItems from '../DownloadItems';
import analytics from '../../analytics/analytics';
import userEvent from '@testing-library/user-event';

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

  it('should send google analytics event on links click', () => {
    const mockedSendEvent = jest.spyOn(analytics, 'sendEvent');
    mockedSendEvent.mockImplementation();
    const { container } = render(<DownloadItems manual="FAKE_MANUAL" drawings="FAKE_DRAWINGS" />);
    const manualDownload = container.querySelector('[data-for="manual-tip"]');
    const drawingsDownload = container.querySelector('[data-for="drawings-tip"]');

    userEvent.click(manualDownload);

    expect(mockedSendEvent).toHaveBeenCalledWith({
      category: 'user',
      action: 'download manual',
      label: 'FAKE_MANUAL',
    });

    userEvent.click(drawingsDownload);

    expect(mockedSendEvent).toHaveBeenCalledWith({
      category: 'user',
      action: 'download drawings',
      label: 'FAKE_DRAWINGS',
    });
  });
});
