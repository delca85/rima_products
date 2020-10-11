import { render } from '@testing-library/react';
import { default as React } from 'react';
import App from '../App';

describe('App component', () => {
  it('should render all the desired paths', () => {
    const { container } = render(<App />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="sc-bdnylx eWauba"
        >
          <a
            href="/macro_product/1"
          >
            Macro product with id: 1
          </a>
        </div>
      </div>
    `);
  });
});
