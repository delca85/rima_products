import { mockMacroProducts } from './macroProduct.mocks';
import { default as macroProductResolvers } from '../macroProduct.resolvers';

const mockMacroProductModel = {
  findByPk: (id) => mockMacroProducts.find((macroProduct) => macroProduct.id === id),
  findAll: () => mockMacroProducts,
};

describe('macroProduct resolvers logic', () => {
  it('should return a part by its id', () => {
    const res = macroProductResolvers.Query.macroProduct(
      null,
      { id: 1 },
      { models: { MacroProduct: mockMacroProductModel } },
      null
    );

    expect(res).toEqual(mockMacroProducts[0]);
  });

  it('should return all the parts in db', () => {
    const res = macroProductResolvers.Query.macroProducts(
      null,
      {},
      { models: { MacroProduct: mockMacroProductModel } },
      null
    );

    expect(res).toEqual(mockMacroProducts);
  });
});
