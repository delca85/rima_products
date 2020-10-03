import { default as React } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { usePartsQuery } from '../types/graphql.generated';
import { IRouteParams } from '../types/router.types';
import { IRimaComponentProps } from '../types/component.types';
import Loading from '../common/Loading';
import MacroProduct from './MacroProduct';
import SubpartsTable from '../subparts/SubpartsTable';

const MacroProductContainerRaw = ({ className }: IRimaComponentProps) => {
  const { id: paramId } = useParams<IRouteParams>();
  const id = Number(paramId);

  const { data, loading, error } = usePartsQuery({
    variables: { id },
  });

  if (loading) return <Loading />;

  if (error || !data || !data.part) return <div>Error...</div>;

  const { part } = data;
  const subparts = part.subparts || [];
  const thumb = part.thumb || '';

  return (
    <div className={className}>
      <MacroProduct className="macro-product" id={id} name={part.name} thumb={thumb} />
      <SubpartsTable className="subparts-table" subparts={subparts} />
    </div>
  );
};

const MacroProductContainer = styled(MacroProductContainerRaw)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  .macro-product {
    grid-column: 1 / 3;
  }
`;

export default MacroProductContainer;
