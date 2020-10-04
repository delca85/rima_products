import { GraphQLResolveInfo } from 'graphql';
import context from '../../context';
import { mockParts, mockSubparts } from './part.mocks';
import { default as partResolvers } from '../part.resolvers';
import { PartModelStatic } from '../part.model';
import { MacroProductModel, MacroProductModelStatic } from '../../macro-product';
import partLoader from '../part.loader';

jest.mock('../part.model.ts', () => ({
  __esModule: true,
  default: {
    id: () => 1,
  },
}));

const mockCreateContext = jest.spyOn(context, 'createContext');
const mockPartLoader = jest.spyOn(partLoader, 'loader');
const mockLoad = jest.fn();

const mockPartModel = {
  findByPk: (id: Number) => Promise.resolve(mockParts.find((part) => part.id === id)),
  findAll: () => Promise.resolve(mockParts),
};

const mockInfo = {} as GraphQLResolveInfo;

describe('part resolvers logic', () => {
  beforeEach(() => {
    mockPartLoader.mockReturnValueOnce({
      loadMany: jest.fn(),
      clear: jest.fn(),
      clearAll: jest.fn(),
      prime: jest.fn(),
      load: mockLoad,
    });
    mockCreateContext.mockReturnValueOnce({
      models: {
        Part: mockPartModel as PartModelStatic,
        MacroProduct: {
          ...MacroProductModel,
          findOne: () => Promise.resolve({ quantity: 1 }),
        } as MacroProductModelStatic,
      },
      loaders: { Part: partLoader.loader() },
    });
  });

  afterEach(() => {
    mockCreateContext.mockReset();
  });
  it('should call loader load when a part is searched by its id', async () => {
    const partQuery = partResolvers.Query?.part || (() => Promise.resolve());
    const res = await partQuery({}, { id: 1 }, context.createContext(), mockInfo);

    expect(mockLoad).toBeCalledWith(1);
  });

  it('should return all the parts in db', async () => {
    const partsQuery = partResolvers.Query?.parts || (() => Promise.resolve());
    const res = await partsQuery({}, {}, context.createContext(), mockInfo);

    expect(res).toEqual(mockParts);
  });

  it('should return subparts for a part when present', async () => {
    const subpartsQuery = partResolvers.Part?.subparts || (() => Promise.resolve());
    const parentPart = mockParts[1];
    const expectedSubparts = mockSubparts.map((mockSubpart) => ({
      id: mockSubpart.id,
      name: mockSubpart.name,
      thumb: mockSubpart.thumb,
      parentId: mockSubpart.parentId,
    }));

    const res = await subpartsQuery(parentPart, {}, context.createContext(), mockInfo);

    expect(res).toEqual(expectedSubparts);
  });

  it('should return an empty array as subparts for a part with no subparts', async () => {
    const subpartsQuery = partResolvers.Part?.subparts || (() => Promise.resolve());
    const parentPart = mockParts[0];

    const res = await subpartsQuery(parentPart, {}, context.createContext(), mockInfo);

    expect(res).toEqual([]);
  });

  it('should return subparts quantity for a subpart', async () => {
    const quantityQuery = partResolvers.Part?.quantity || (() => Promise.resolve());
    const parentPart = mockParts[0];

    const res = await quantityQuery(parentPart, {}, context.createContext(), mockInfo);

    expect(res).toBe(1);
  });

  it('should return 0 for quantity when there is no association related to the part', async () => {
    const quantityQuery = partResolvers.Part?.quantity || (() => Promise.resolve());
    const parentPart = mockParts[0];
    const mockCreatedContext = context.createContext();
    const mockContext = {
      ...mockCreatedContext,
      models: {
        ...mockCreatedContext.models,
        MacroProduct: {
          ...MacroProductModel,
          findOne: () => Promise.resolve(null),
        } as MacroProductModelStatic,
      },
    };

    const res = await quantityQuery(parentPart, {}, mockContext, mockInfo);

    expect(res).toBe(0);
  });
});
