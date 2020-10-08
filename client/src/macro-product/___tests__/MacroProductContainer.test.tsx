import { default as React, ReactNode } from 'react';
import { ApolloError, NetworkStatus } from '@apollo/react-hooks';
import { PartsQueryResult, usePartsQuery } from '../../types/graphql.generated';
import buildApolloClient from '../../apollo/client';
import MacroProductContainer from '../MacroProductContainer';
import renderWithRouter from '../../dev-tools/testUtils';
import { SUBPARTS_TABLE_TITLE } from '../../subparts/SubpartsTable';

jest.mock('../../types/graphql.generated');
jest.mock('react-tooltip', () => ({
  __esModule: true,
  default: ({ id, children }: { id: string; children: ReactNode }) => (
    <div id={id}> {children}</div>
  ),
}));

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
        class="sc-fujyUd pfnpL"
      >
        <div
          class="macro-product-container"
        >
          <div
            class="sc-dlnjPT bEyrhE macro-product"
          >
            <div
              class="macro-product-name-downloads"
            >
              <h2
                class="macro-product-name"
              >
                FAKE_NAME
              </h2>
              <div
                class="sc-gtssRu hDnYhE"
              />
            </div>
            <img
              alt="Product with id: 1"
              class="macro-product-image"
              src=""
            />
          </div>
        </div>
        <footer
          class="sc-iCoHVE jCdbuC"
        >
          Icons made by
           
          <a
            href="https://www.flaticon.com/authors/freepik"
            title="Freepik"
          >
            Freepik
          </a>
           
          from
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
          >
             
            www.flaticon.com
          </a>
        </footer>
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
        class="sc-fujyUd pfnpL"
      >
        <div
          class="macro-product-container"
        >
          <div
            class="sc-dlnjPT bEyrhE macro-product"
          >
            <div
              class="macro-product-name-downloads"
            >
              <h2
                class="macro-product-name"
              >
                FAKE_NAME
              </h2>
              <div
                class="sc-gtssRu hDnYhE"
              />
            </div>
            <img
              alt="Product with id: 1"
              class="macro-product-image"
              src="FAKE_THUMB"
            />
          </div>
          <div
            class="sc-jSFkmK kWiBnt subparts-table"
          >
            <div
              class="scroll-container"
            >
              <div
                class="table-title-icon"
              >
                <h2
                  class="title"
                >
                  Spare parts
                </h2>
                <svg
                  class="icon"
                >
                  spareParts.svg
                </svg>
              </div>
              <table
                class="table"
              >
                <thead>
                  <tr>
                    <th
                      class="sc-hKFyIo bGlfBr"
                    >
                      id
                    </th>
                    <th
                      class="sc-hKFyIo bGlfBr"
                    >
                      name
                    </th>
                    <th
                      class="sc-hKFyIo bGlfBr"
                    >
                      quantity
                    </th>
                    <th
                      class="sc-hKFyIo bGlfBr"
                    >
                      image
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      class="sc-hKFyIo bGlfBr"
                    >
                      2
                    </td>
                    <td
                      class="sc-hKFyIo bGlfBr"
                    >
                      FAKE_SUBPART_NAME
                    </td>
                    <td
                      class="sc-hKFyIo bGlfBr"
                    >
                      1
                    </td>
                    <td
                      class="sc-eCApGN eosXfu"
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
        <footer
          class="sc-iCoHVE jCdbuC"
        >
          Icons made by
           
          <a
            href="https://www.flaticon.com/authors/freepik"
            title="Freepik"
          >
            Freepik
          </a>
           
          from
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
          >
             
            www.flaticon.com
          </a>
        </footer>
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
        class="sc-fujyUd pfnpL"
      >
        <div
          class="macro-product-container"
        >
          <div
            class="sc-dlnjPT bEyrhE macro-product"
          >
            <div
              class="macro-product-name-downloads"
            >
              <h2
                class="macro-product-name"
              >
                FAKE_NAME
              </h2>
              <div
                class="sc-gtssRu hDnYhE"
              />
            </div>
            <img
              alt="Product with id: 1"
              class="macro-product-image"
              src="FAKE_THUMB"
            />
          </div>
        </div>
        <footer
          class="sc-iCoHVE jCdbuC"
        >
          Icons made by
           
          <a
            href="https://www.flaticon.com/authors/freepik"
            title="Freepik"
          >
            Freepik
          </a>
           
          from
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
          >
             
            www.flaticon.com
          </a>
        </footer>
      </div>
    `);
    expect(getByText('FAKE_NAME')).toBeDefined();
    expect(getByAltText('Product with id: 1')).toBeDefined();
    expect(queryByText(SUBPARTS_TABLE_TITLE)).toBeNull();
  });
});
