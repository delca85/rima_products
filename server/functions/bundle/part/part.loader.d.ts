import DataLoader from 'dataloader';
import { Part as tPart } from '../types/graphql.generated';
declare type tBatchParts = (ids: readonly number[]) => Promise<tPart[]>;
export declare const batchParts: tBatchParts;
declare const partLoader: () => DataLoader<number, tPart, number>;
export default partLoader;
