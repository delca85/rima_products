import { Part } from '../../types/graphql.generated';

export const mockedSubparts = [
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

export const mockedParts: Part[] = [
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
    subparts: mockedSubparts,
    manual: 'macro_part_manual',
    drawings: 'macro_part_drawings',
  },
];
