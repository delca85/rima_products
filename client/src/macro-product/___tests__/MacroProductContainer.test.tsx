import { default as React } from 'react';
import { usePartsQuery } from '../../types/graphql.generated';
import MacroProductContainer from '../MacroProductContainer';
import renderWithRouter from '../../dev-tools/testUtils';
import { SUBPARTS_TABLE_TITLE } from '../../subparts/SubpartsTable';

jest.mock('../../types/graphql.generated');

describe('MacroProductContainer logic test ', () => {
  it('should return an loading msg if the query is still loading', () => {
    usePartsQuery.mockReturnValueOnce({ loading: true });

    const { getByText } = renderWithRouter(<MacroProductContainer />);

    expect(getByText('Loading...')).toBeDefined();
  });

  it('should return an error msg if the query has loaded and returns an error', () => {
    usePartsQuery.mockReturnValueOnce({ loading: false, error: true });

    const { getByText } = renderWithRouter(<MacroProductContainer />);

    expect(getByText('Error...')).toBeDefined();
  });

  it('should return an error msg if the query has loaded but does not return any data', () => {
    usePartsQuery.mockReturnValueOnce({ loading: false, error: false });

    const { getByText } = renderWithRouter(<MacroProductContainer />);

    expect(getByText('Error...')).toBeDefined();
  });

  it('should return an error msg if the query has loaded, returns data but without any part', () => {
    usePartsQuery.mockReturnValueOnce({ loading: false, error: false, data: {} });

    const { getByText } = renderWithRouter(<MacroProductContainer />);

    expect(getByText('Error...')).toBeDefined();
  });

  it('should render a MacroProduct even if it is without thumb', () => {
    usePartsQuery.mockReturnValueOnce({
      loading: false,
      error: false,
      data: {
        part: {
          id: 'FAKE_ID',
          name: 'FAKE_NAME',
        },
      },
    });
    const route = '/macro_products/1';
    const path = '/macro_products/:id';

    const { container, getByText, getByAltText } = renderWithRouter(<MacroProductContainer />, {
      route,
      path,
    });

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="sc-jSFkmK cVhJlT"
      >
        <div
          class="sc-gtssRu hUVamV macro-product"
        >
          <h2
            class="macro-product-name"
          >
            FAKE_NAME
          </h2>
          <img
            alt="Product with id: 1"
            src=""
          />
        </div>
      </div>
    `);
    expect(getByText('FAKE_NAME')).toBeDefined();
    expect(getByAltText('Product with id: 1')).toBeDefined();
    expect(getByAltText('Product with id: 1').getAttribute('src')).toBe('');
  });

  it('should render MacroProduct with right props and subparts table too', () => {
    usePartsQuery.mockReturnValueOnce({
      loading: false,
      error: false,
      data: {
        part: {
          id: 'FAKE_ID',
          name: 'FAKE_NAME',
          thumb: 'FAKE_THUMB',
          subparts: [
            {
              id: 'FAKE_SUBPART_ID',
              name: 'FAKE_SUBPART_NAME',
              thumb: 'FAKE_SUBPART_THUMB',
            },
          ],
        },
      },
    });
    const route = '/macro_products/1';
    const path = '/macro_products/:id';

    const { container, getByText, getByAltText } = renderWithRouter(<MacroProductContainer />, {
      route,
      path,
    });

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="sc-jSFkmK cVhJlT"
      >
        <div
          class="sc-gtssRu hUVamV macro-product"
        >
          <h2
            class="macro-product-name"
          >
            FAKE_NAME
          </h2>
          <img
            alt="Product with id: 1"
            src="FAKE_THUMB"
          />
        </div>
        <div
          class="sc-eCApGN hSPpfh subparts-table"
        >
          <div
            class="scroll-container"
          >
            <h2>
              Spare parts
            </h2>
            <table
              class="table"
            >
              <thead>
                <tr>
                  <th
                    class="sc-dlnjPT cWsEjB"
                  >
                    id
                  </th>
                  <th
                    class="sc-dlnjPT cWsEjB"
                  >
                    name
                  </th>
                  <th
                    class="sc-dlnjPT cWsEjB"
                  >
                    quantity
                  </th>
                  <th
                    class="sc-dlnjPT cWsEjB"
                  >
                    image
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    class="sc-dlnjPT cWsEjB"
                  >
                    FAKE_SUBPART_ID
                  </td>
                  <td
                    class="sc-dlnjPT cWsEjB"
                  >
                    FAKE_SUBPART_NAME
                  </td>
                  <td
                    class="sc-dlnjPT cWsEjB"
                  >
                    1
                  </td>
                  <td
                    class="sc-hKFyIo ioGLMQ"
                  >
                    <img
                      alt="Subpart with id: FAKE_SUBPART_ID"
                      src="FAKE_SUBPART_THUMB"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `);
    expect(getByText('FAKE_NAME')).toBeDefined();
    expect(getByAltText('Product with id: 1')).toBeDefined();
    expect(getByText(SUBPARTS_TABLE_TITLE)).toBeDefined();
    expect(getByText('FAKE_SUBPART_ID')).toBeDefined();
    expect(getByText('FAKE_SUBPART_ID')).toBeDefined();
    expect(getByText('FAKE_SUBPART_NAME')).toBeDefined();
    expect(getByAltText('Subpart with id: FAKE_SUBPART_ID')).toBeDefined();
  });

  it('should return no table if not subparts are retrieved', () => {
    usePartsQuery.mockReturnValueOnce({
      loading: false,
      error: false,
      data: {
        part: {
          id: 'FAKE_ID',
          name: 'FAKE_NAME',
          thumb: 'FAKE_THUMB',
        },
      },
    });
    const route = '/macro_products/1';
    const path = '/macro_products/:id';

    const { container, queryByText, getByText, getByAltText } = renderWithRouter(
      <MacroProductContainer />,
      {
        route,
        path,
      },
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="sc-jSFkmK cVhJlT"
      >
        <div
          class="sc-gtssRu hUVamV macro-product"
        >
          <h2
            class="macro-product-name"
          >
            FAKE_NAME
          </h2>
          <img
            alt="Product with id: 1"
            src="FAKE_THUMB"
          />
        </div>
      </div>
    `);
    expect(getByText('FAKE_NAME')).toBeDefined();
    expect(getByAltText('Product with id: 1')).toBeDefined();
    expect(queryByText(SUBPARTS_TABLE_TITLE)).toBeNull();
  });
});
