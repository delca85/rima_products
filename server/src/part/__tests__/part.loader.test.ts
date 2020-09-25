import { mockParts, mockSubparts } from './part.mocks';
import { batchParts } from '../part.loader';
import { default as PartModel } from '../part.model';

describe('part loader', () => {
  it('should return formatted parts', async () => {
    jest.spyOn(PartModel, 'findAll').mockResolvedValueOnce(mockParts);

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
