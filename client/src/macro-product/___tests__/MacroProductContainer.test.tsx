import { default as React } from 'react';
import { ApolloError, NetworkStatus } from '@apollo/react-hooks';
import { PartsQueryResult, usePartsQuery } from '../../types/graphql.generated';
import buildApolloClient from '../../apollo/client';
import MacroProductContainer from '../MacroProductContainer';
import renderWithRouter from '../../dev-tools/testUtils';
import { SUBPARTS_TABLE_TITLE } from '../../subparts/SubpartsTable';

jest.mock('../../types/graphql.generated');

const mockUsePartsQuery = usePartsQuery as jest.MockedFunction<typeof usePartsQuery>;
const mockReturnValue: PartsQueryResult = {
  client: buildApolloClient(),
  data: undefined,
  loading: false,
  networkStatus: NetworkStatus.ready,
  called: true,
  startPolling: jest.fn(),
  stopPolling: jest.fn(),
  subscribeToMore: jest.fn(),
  updateQuery: jest.fn(),
  refetch: jest.fn(),
  fetchMore: jest.fn(),
  variables: { id: 1 },
};

describe('MacroProductContainer logic test ', () => {
  it('should return an loading msg if the query is still loading', () => {
    mockUsePartsQuery.mockReturnValueOnce({ ...mockReturnValue, loading: true });

    const { getByText } = renderWithRouter(<MacroProductContainer />);

    expect(getByText('Loading...')).toBeDefined();
  });

  it('should return an error msg if the query has loaded and returns an error', () => {
    mockUsePartsQuery.mockReturnValueOnce({
      ...mockReturnValue,
      error: new ApolloError({ errorMessage: 'FAKE_ERROR' }),
    });

    const { getByText } = renderWithRouter(<MacroProductContainer />);

    expect(getByText('Error...')).toBeDefined();
  });

  it('should return an error msg if the query has loaded but does not return any data', () => {
    mockUsePartsQuery.mockReturnValueOnce(mockReturnValue);

    const { getByText } = renderWithRouter(<MacroProductContainer />);

    expect(getByText('Error...')).toBeDefined();
  });

  it('should return an error msg if the query has loaded, returns data but without any part', () => {
    mockUsePartsQuery.mockReturnValueOnce({ ...mockReturnValue, data: {} });

    const { getByText } = renderWithRouter(<MacroProductContainer />);

    expect(getByText('Error...')).toBeDefined();
  });

  it('should render a MacroProduct even if it is without thumb', () => {
    mockUsePartsQuery.mockReturnValueOnce({
      ...mockReturnValue,
      data: {
        part: {
          id: 1,
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
        class="sc-gKAblj kBkyes"
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
    mockUsePartsQuery.mockReturnValueOnce({
      ...mockReturnValue,
      data: {
        part: {
          id: 1,
          name: 'FAKE_NAME',
          thumb: 'FAKE_THUMB',
          subparts: [
            {
              id: 2,
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
        class="sc-gKAblj kBkyes"
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
                    2
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
                      alt="Subpart with id: 2"
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
    expect(getByText('2')).toBeDefined();
    expect(getByText('FAKE_SUBPART_NAME')).toBeDefined();
    expect(getByAltText('Subpart with id: 2')).toBeDefined();
  });

  it('should return no table if not subparts are retrieved', () => {
    mockUsePartsQuery.mockReturnValueOnce({
      ...mockReturnValue,
      data: {
        part: {
          id: 1,
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
        class="sc-gKAblj kBkyes"
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
