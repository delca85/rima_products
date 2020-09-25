import { default as MacroProductModel } from '../macroProduct.model';

jest.mock('../../part/part.model.ts', () => ({
  __esModule: true,
  default: () => ({
    belongsToMany: () => {},
  }),
}));
describe('macroProduct model class test', () => {
  it('should return right value through getters', () => {
    const id = 'FAKE_ID';
    const childPartNo = 'FAKE_CHILD_PART_NO';
    const parentPartNo = 'FAKE_PARENT_PART_NO';
    const quantity = 'FAKE_QUANTITY';

    const macroProductInstance = new MacroProductModel({ id, childPartNo, parentPartNo, quantity });

    expect(macroProductInstance.getDataValue('id')).toBe(id);
    expect(macroProductInstance.getDataValue('childPartNo')).toBe(childPartNo);
    expect(macroProductInstance.getDataValue('parentPartNo')).toBe(parentPartNo);
    expect(macroProductInstance.getDataValue('quantity')).toBe(quantity);
  });
});
