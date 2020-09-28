import { default as React } from 'react';
import renderWithRouter from '../../dev-tools/testUtils';
import NoMatchingRoute from '../NoMatchingRoute';

describe('NoMatchingRoute component', () => {
  it('should show the right url in the displayed message', () => {
    const route = '/FAKE_URL/1';

    const { getByText } = renderWithRouter(<NoMatchingRoute />, { route });

    expect(getByText('No page with this url: /FAKE_URL/1!')).toBeDefined();
  });
});
