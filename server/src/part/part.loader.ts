import DataLoader from 'dataloader';
import { default as PartModel } from './part.model';
import { Part as tPart } from '../types/graphql.generated';

type tBatchParts = (ids: readonly number[]) => Promise<tPart[]>;

const formatParts = (modelInstances: any[]): tPart[] =>
  modelInstances.map((instance) => ({
    id: instance.id,
    name: instance.name,
    thumb: instance.thumb,
    parentId: instance.parentId,
    subparts: instance.subparts,
    manual: instance.manual,
    drawings: instance.drawings,
  }));

export const batchParts: tBatchParts = async (ids) => {
  const parts = await PartModel.findAll({
    where: {
      id: [...ids],
    },
    raw: true,
  });

  if (parts.length) {
    return formatParts(parts);
  }
  return [];
};

const loader = () => new DataLoader<number, tPart>(batchParts);

export default {
  loader,
};
