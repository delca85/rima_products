import DataLoader from 'dataloader';
import { PartModelStatic, PartModel, partLoader } from './part';
import { MacroProductModelStatic, MacroProductModel } from './macro-product';
import { Part as tPart } from './types/graphql.generated';

interface IModels {
  Part: PartModelStatic;
  MacroProduct: MacroProductModelStatic;
}

interface ILoaders {
  Part: DataLoader<number, tPart>;
}

export interface RimaModelsContext {
  models: IModels;
  loaders: ILoaders;
}
export default {
  createContext: (): RimaModelsContext => ({
    models: { Part: PartModel, MacroProduct: MacroProductModel },
    loaders: { Part: partLoader.loader() },
  }),
};
