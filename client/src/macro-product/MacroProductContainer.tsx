import { default as React } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { tPart, usePartsQuery } from '../types/graphql.generated';
import { IRouteParams } from '../types/router.types';
import { IRimaComponentProps } from '../types/component.types';
import Loading from '../common/Loading';
import MacroProduct from './MacroProduct';
import SubpartsTable from '../subparts/SubpartsTable';
import Error from '../common/Error';
import FooterIconLicense from '../common/FooterIconsLicense';

const MacroProductContainerRaw = ({ className }: IRimaComponentProps) => {
  const { id: paramId } = useParams<IRouteParams>();
  const id = Number(paramId);

  const { data, loading, error } = usePartsQuery({
    variables: { id },
  });

  if (loading) return <Loading />;

  if (error || !data || !data.part) return <Error />;

  const { part } = data;

  let subparts: tPart[] = [];

  if (part.subparts) {
    subparts = part.subparts;
    part.subparts.forEach((subpart) => (subparts = subparts.concat(subpart.subparts || [])));
  }

  const thumb = part.thumb || '';

  return (
    <div className={className}>
      <div className="macro-product-container">
        <MacroProduct className="macro-product" id={id} name={part.name} thumb={thumb} />
        <SubpartsTable className="subparts-table" subparts={subparts} />
      </div>
      <FooterIconLicense />
    </div>
  );
};

const MacroProductContainer = styled(MacroProductContainerRaw)`
  height: 100vh;
  .macro-product-container {
    height: 100%;
    max-width: 100vw;
    display: grid;
    margin: 20px 10px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    .macro-product {
      grid-column: 1 / 3;
    }
  }
`;

export default MacroProductContainer;
