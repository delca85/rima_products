import { default as React } from 'react';
import App from '../App';
import renderWithRouter from '../dev-tools/testUtils';

jest.mock('../analytics/useGoogleAnalytics.ts');

describe('App component', () => {
  it('should render all the desired paths', () => {
    const { container } = renderWithRouter(<App />);
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
