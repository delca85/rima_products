import { mockedParts, mockSubparts } from './part.mocks';
import { batchParts } from '../part.loader';
import { default as PartModel } from '../part.model';

jest.mock('../part.model.ts', () => ({
  findAll: () => Promise.resolve(mockedParts),
}));

describe('part loader', () => {
  it('should return formatted parts', async () => {
    const expectedParts = [
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
        manual: 'macro_part_manual',
        drawings: 'macro_part_drawings',
        subparts: mockSubparts,
      },
    ];

    const actualParts = await batchParts([1, 2]);

    expect(actualParts).toEqual(expectedParts);
  });

  it('should return an empty array when there is no parts returned', async () => {
    jest.spyOn(PartModel, 'findAll').mockResolvedValueOnce([]);

    const actualParts = await batchParts([1, 2]);

    expect(actualParts).toEqual([]);
  });
});
