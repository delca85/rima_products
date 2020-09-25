import React from 'react';
import { IPartComponentProps } from '../../types/component.types';
import MacroProduct from '../MacroProduct';

export default {
  title: 'MacroProduct',
  component: MacroProduct,
};

export const MacroProductDefault: React.FunctionComponent<IPartComponentProps> = () => (
  <MacroProduct
    id={1}
    name="rail brake"
    thumb="https://www.rimagroup.com/wp-content/uploads/2019/06/Rail-Brake-TM.png"
  />
);

export const MacroProductNoThumb: React.FunctionComponent<IPartComponentProps> = () => (
  <MacroProduct id={1} name="rail brake" />
);
