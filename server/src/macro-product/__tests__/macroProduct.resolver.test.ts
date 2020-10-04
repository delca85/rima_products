import { GraphQLResolveInfo } from 'graphql';
import context from '../../context';
import { mockMacroProducts } from './macroProduct.mocks';
import { default as macroProductResolvers } from '../macroProduct.resolvers';
import { MacroProductModelStatic } from '../macroProduct.model';
import { partLoader, PartModel } from '../../part';

jest.mock('../../part');
const mockCreateContext = jest.spyOn(context, 'createContext');

const mockMacroProductModel = {
  findByPk: (id: number) =>
    Promise.resolve(mockMacroProducts.find((macroProduct) => macroProduct.id === id)),
  findAll: () => Promise.resolve(mockMacroProducts),
};

const mockInfo = {} as GraphQLResolveInfo;

describe('macroProduct resolvers logic', () => {
  beforeEach(() => {
    mockCreateContext.mockReturnValueOnce({
      models: { MacroProduct: mockMacroProductModel as MacroProductModelStatic, Part: PartModel },
      loaders: { Part: partLoader.loader() },
    });
  });

  afterEach(() => {
    mockCreateContext.mockClear();
  });
  it('should return a part by its id', async () => {
    const macroProductQuery =
      macroProductResolvers.Query?.macroProduct || (() => Promise.resolve());
    const res = await macroProductQuery({}, { id: 1 }, context.createContext(), mockInfo);

    expect(res).toEqual(mockMacroProducts[0]);
  });

  it('should return all the parts in db', async () => {
    const macroProductsQuery =
      macroProductResolvers.Query?.macroProducts || (() => () => Promise.resolve());

    const res = await macroProductsQuery({}, {}, context.createContext(), mockInfo);

    expect(res).toEqual(mockMacroProducts);
  });
});
