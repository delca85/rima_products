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

export const mockParts = [
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
  },
];
