import context from '../context';
import { partLoader, PartModel } from '../part';

jest.mock('../macro-product', () => ({
  MacroProductModel: 'FAKE_MACRO_PRODUCT_MODEL',
}));

describe('context module', () => {
  it('should create a context as expected', () => {
    const mockedLoader = jest.spyOn(partLoader, 'loader');
    const expectedContextSubpart = {
      models: { Part: PartModel, MacroProduct: 'FAKE_MACRO_PRODUCT_MODEL' },
    };

    expect(context.createContext()).toMatchObject(expectedContextSubpart);
  });
});
