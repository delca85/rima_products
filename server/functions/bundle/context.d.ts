import DataLoader from 'dataloader';
import { PartModelStatic } from './part';
import { MacroProductModelStatic } from './macro-product';
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
export declare const createContext: () => RimaModelsContext;
export {};
