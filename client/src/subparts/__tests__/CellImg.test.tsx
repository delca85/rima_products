import { cleanup, render } from '@testing-library/react';
import { default as React } from 'react';
import CellImg from '../CellImg';
describe('CellImg visual component render test', () => {
  let renderContainer: HTMLElement;
  beforeEach(() => {
    const row = document.createElement('tr');
    renderContainer = document.body.appendChild(row);
  });
  afterEach(cleanup);

  it('should does not render an img if not src prop has been provided', () => {
    const { container, queryByText } = render(<CellImg altText="FAKE_ALT_TEXT" />, {
      container: renderContainer,
    });

    expect(queryByText('FAKE_ALT_TEXT')).toBeNull();
    expect(container.firstChild).toMatchInlineSnapshot(`
      <td
        class="sc-bdnylx jzEwVN"
      />
    `);
    expect(container.firstChild.firstChild).toBeNull();
  });

  it('should render an img if src prop has been provided', () => {
    const { container, queryByText } = render(<CellImg src="FAKE_SRC" altText="FAKE_ALT_TEXT" />, {
      container: renderContainer,
    });

    expect(queryByText('FAKE_ALT_TEXT')).toBeDefined();
    expect(container.firstChild).toMatchInlineSnapshot(`
      <td
        class="sc-bdnylx jzEwVN"
      >
        <img
          alt="FAKE_ALT_TEXT"
          src="FAKE_SRC"
        />
      </td>
    `);
    expect(container.firstChild.firstChild).toMatchInlineSnapshot(`
      <img
        alt="FAKE_ALT_TEXT"
        src="FAKE_SRC"
      />
    `);
  });
});
