import { GraphQLResolveInfo } from 'graphql';
import context from '../../context';
import { mockedMacroProducts } from './macroProduct.mocks';
import { default as macroProductResolvers } from '../macroProduct.resolvers';
import { MacroProductModelStatic } from '../macroProduct.model';
import { partLoader, PartModel } from '../../part';

jest.mock('../../part');
const mockedCreateContext = jest.spyOn(context, 'createContext');

const mockedMacroProductModel = {
  findByPk: (id: number) =>
    Promise.resolve(mockedMacroProducts.find((macroProduct) => macroProduct.id === id)),
  findAll: () => Promise.resolve(mockedMacroProducts),
};

const mockedInfo = {} as GraphQLResolveInfo;

describe('macroProduct resolvers logic', () => {
  beforeEach(() => {
    mockedCreateContext.mockReturnValueOnce({
      models: { MacroProduct: mockedMacroProductModel as MacroProductModelStatic, Part: PartModel },
      loaders: { Part: partLoader.loader() },
    });
  });

  afterEach(() => {
    mockedCreateContext.mockClear();
  });
  it('should return a part by its id', async () => {
    const macroProductQuery =
      macroProductResolvers.Query?.macroProduct || (() => Promise.resolve());
    const res = await macroProductQuery({}, { id: 1 }, context.createContext(), mockedInfo);

    expect(res).toEqual(mockedMacroProducts[0]);
  });

  it('should return all the parts in db', async () => {
    const macroProductsQuery =
      macroProductResolvers.Query?.macroProducts || (() => () => Promise.resolve());

    const res = await macroProductsQuery({}, {}, context.createContext(), mockedInfo);

    expect(res).toEqual(mockedMacroProducts);
  });
});
