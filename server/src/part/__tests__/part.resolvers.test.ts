import { GraphQLResolveInfo } from 'graphql';
import context from '../../context';
import { mockedParts, mockedSubparts } from './part.mocks';
import { default as partResolvers } from '../part.resolvers';
import PartModel from '../part.model';
import { MacroProductModel, MacroProductModelStatic } from '../../macro-product';
import partLoader from '../part.loader';

jest.mock('../part.model.ts', () => ({
  id: () => 1,
  findByPk: (id: Number) => Promise.resolve(mockedParts.find((part) => part.id === id)),
  findAll: () => Promise.resolve(mockedParts),
}));

const mockedCreateContext = jest.spyOn(context, 'createContext');
const mockedPartLoader = jest.spyOn(partLoader, 'loader');
const mockedLoad = jest.fn();

const mockedInfo = {} as GraphQLResolveInfo;

describe('part resolvers logic', () => {
  beforeEach(() => {
    mockedPartLoader.mockReturnValueOnce({
      loadMany: jest.fn(),
      clear: jest.fn(),
      clearAll: jest.fn(),
      prime: jest.fn(),
      load: mockedLoad,
    });
    mockedCreateContext.mockReturnValueOnce({
      models: {
        Part: PartModel,
        MacroProduct: {
          ...MacroProductModel,
          findOne: () => Promise.resolve({ quantity: 1 }),
        } as MacroProductModelStatic,
      },
      loaders: { Part: partLoader.loader() },
    });
  });

  afterEach(() => {
    mockedCreateContext.mockReset();
  });
  it('should call loader load when a part is searched by its id', async () => {
    const partQuery = partResolvers.Query?.part || (() => Promise.resolve());
    await partQuery({}, { id: 1 }, context.createContext(), mockedInfo);

    expect(mockedLoad).toBeCalledWith(1);
  });

  it('should return all the parts in db', async () => {
    const partsQuery = partResolvers.Query?.parts || (() => Promise.resolve());
    const res = await partsQuery({}, {}, context.createContext(), mockedInfo);

    expect(res).toEqual(mockedParts);
  });

  it('should return subparts for a part when present', async () => {
    const subpartsQuery = partResolvers.Part?.subparts || (() => Promise.resolve());
    const parentPart = mockedParts[1];
    const expectedSubparts = mockedSubparts.map((mockSubpart) => ({
      id: mockSubpart.id,
      name: mockSubpart.name,
      thumb: mockSubpart.thumb,
      parentId: mockSubpart.parentId,
    }));

    const res = await subpartsQuery(parentPart, {}, context.createContext(), mockedInfo);

    expect(res).toEqual(expectedSubparts);
  });

  it('should return an empty array as subparts for a part with no subparts', async () => {
    const subpartsQuery = partResolvers.Part?.subparts || (() => Promise.resolve());
    const parentPart = mockedParts[0];

    const res = await subpartsQuery(parentPart, {}, context.createContext(), mockedInfo);

    expect(res).toEqual([]);
  });

  it('should return subparts quantity for a subpart', async () => {
    const quantityQuery = partResolvers.Part?.quantity || (() => Promise.resolve());
    const parentPart = mockedParts[0];

    const res = await quantityQuery(parentPart, {}, context.createContext(), mockedInfo);

    expect(res).toBe(1);
  });

  it('should return 0 for quantity when there is no association related to the part', async () => {
    const quantityQuery = partResolvers.Part?.quantity || (() => Promise.resolve());
    const parentPart = mockedParts[0];
    const mockedCreatedContext = context.createContext();
    const mockedContext = {
      ...mockedCreatedContext,
      models: {
        ...mockedCreatedContext.models,
        MacroProduct: {
          ...mockedCreatedContext.models.MacroProduct,
          findOne: () => Promise.resolve(null),
        } as MacroProductModelStatic,
      },
    };

    const res = await quantityQuery(parentPart, {}, mockedContext, mockedInfo);

    expect(res).toBe(0);
  });
});
