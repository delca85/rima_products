import { default as React } from 'react';
import { render } from '@testing-library/react';
import SubpartsTableHeader from '../SubpartsTableHeader';

describe('SubpartsTableHeader', () => {
  it('should render the same number of headers that receives as props', () => {
    const header = document.createElement('thead');
    const fakeHeadings = ['FAKE_HEADING_1', 'FAKE_HEADING_2', 'FAKE_HEADING_3'];

    const { container, getAllByText } = render(<SubpartsTableHeader headings={fakeHeadings} />, {
      container: document.body.appendChild(header),
    });

    expect(getAllByText(/^FAKE_HEADING_[1,2,3]$/).length).toBe(3);
    expect(container.querySelectorAll('tr').length).toBe(1);
    expect(container.querySelectorAll('th').length).toBe(3);
    expect(container.querySelectorAll('td').length).toBe(0);
  });

  it('should not render any header if provided headings array is empty', () => {
    const header = document.createElement('thead');
    const fakeHeadings: string[] = [];

    const { container } = render(<SubpartsTableHeader headings={fakeHeadings} />, {
      container: document.body.appendChild(header),
    });

    expect(container.querySelectorAll('tr').length).toBe(1);
    expect(container.querySelectorAll('th').length).toBe(0);
    expect(container.querySelectorAll('td').length).toBe(0);
  });
});
