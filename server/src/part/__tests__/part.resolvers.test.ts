import { mockParts, mockSubparts } from './part.mocks';
import { default as partResolvers } from '../part.resolvers';

const mockPartModel = {
  findByPk: (id) => mockParts.find((part) => part.id === id),
  findAll: () => mockParts,
};

const mockPartLoader = {
  load: jest.fn(),
};

describe('part resolvers logic', () => {
  it('should call loader load when a part is searched by its id', () => {
    const res = partResolvers.Query.part(null, { id: 1 }, { loaders: { Part: mockPartLoader } }, null);

    expect(mockPartLoader.load).toBeCalledWith(1);
  });

  it('should return all the parts in db', () => {
    const res = partResolvers.Query.parts(null, {}, { models: { Part: mockPartModel } }, null);

    expect(res).toEqual(mockParts);
  });

  it('should return subparts for a part when present', async () => {
    const parentPart = mockParts[1];
    const expectedSubparts = mockSubparts.map((mockSubpart) => ({
      id: mockSubpart.id,
      name: mockSubpart.name,
      thumb: mockSubpart.thumb,
      parentId: mockSubpart.parentId,
    }));

    const res = await partResolvers.Part.subparts(parentPart, {}, { models: { Part: mockPartModel } }, null);

    expect(res).toEqual(expectedSubparts);
  });

  it('should return an empty array as subparts for a part with no subparts', async () => {
    const parentPart = mockParts[0];

    const res = await partResolvers.Part.subparts(parentPart, {}, { models: { Part: mockPartModel } }, null);

    expect(res).toEqual([]);
  });

  it('should return subparts quantity for a subpart', async () => {
    const parentPart = mockParts[0];
    const mockMacroProductModel = { findOne: () => Promise.resolve({ quantity: 1 }) };

    const res = await partResolvers.Part.quantity(
      parentPart,
      {},
      { models: { MacroProduct: mockMacroProductModel } },
      null
    );

    expect(res).toBe(1);
  });

  it('should return 0 for quantity when there is no association related to the part', async () => {
    const parentPart = mockParts[0];
    const mockMacroProductModel = { findOne: () => Promise.resolve(null) };

    const res = await partResolvers.Part.quantity(
      parentPart,
      {},
      { models: { MacroProduct: mockMacroProductModel } },
      null
    );

    expect(res).toBe(0);
  });
});
