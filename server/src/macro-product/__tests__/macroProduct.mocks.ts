import { MacroProduct } from '../../types/graphql.generated';

export const mockMacroProducts: MacroProduct[] = [
  {
    id: 1,
    childPartNo: 2,
    parentPartNo: 1,
    quantity: 10,
  },
  {
    id: 2,
    childPartNo: 3,
    parentPartNo: 1,
    quantity: 100,
  },
];
