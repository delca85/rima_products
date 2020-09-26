import { Model, BuildOptions } from 'sequelize';
import { MacroProduct as tMacroProduct } from '../types/graphql.generated';
declare class MacroProduct extends Model implements tMacroProduct {
    id: number;
    childPartNo: number;
    parentPartNo: number;
    quantity: number;
}
export declare type MacroProductModelStatic = typeof Model & {
    new (values?: Record<string, unknown>, options?: BuildOptions): MacroProduct;
};
declare const _default: MacroProductModelStatic;
export default _default;
