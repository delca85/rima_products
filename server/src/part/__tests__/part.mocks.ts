import { Part } from '../../types/graphql.generated';

export const mockSubparts = [
  {
    id: 1,
    name: 'screw',
    thumb: 'screw_thumb',
    parentId: 2,
    getId: () => 1,
    getName: () => 'screw',
    getThumb: () => 'screw_thumb',
  },
];

export const mockParts: Part[] = [
  {
    id: 1,
    name: 'screw',
    thumb: 'screw_thumb',
    parentId: 2,
  },
  {
    id: 2,
    name: 'macro_part',
    thumb: 'macro_part_thumb',
    subparts: mockSubparts,
    manual: 'macro_part_manual',
    drawings: 'macro_part_drawings',
  },
];
