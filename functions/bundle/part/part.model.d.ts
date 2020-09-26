import { Model, BuildOptions } from 'sequelize';
import { Part as tPart } from '../types/graphql.generated';
declare class Part extends Model implements tPart {
    id: number;
    name: string;
    thumb?: string;
    subparts?: tPart[];
}
export declare type PartModelStatic = typeof Model & {
    new (values?: Record<string, unknown>, options?: BuildOptions): Part;
};
declare const _default: PartModelStatic;
export default _default;
