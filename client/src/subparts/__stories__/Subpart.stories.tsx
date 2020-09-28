import { default as React } from 'react';
import { IPartComponentProps } from '../../types/component.types';
import Subpart from '../Subpart';

export default {
  title: 'Subpart',
  component: Subpart,
  decorators: [
    (Story: React.ElementType) => (
      <table>
        <tbody>
          <Story />
        </tbody>
      </table>
    ),
  ],
};

export const SubpartFull: React.FunctionComponent<IPartComponentProps> = () => (
  <Subpart
    id={2}
    name="screw"
    thumb="https://www.rifaidate.it/attrezzi/chiodi-e-viti/viti-passo-inglese_O1.jpg"
    quantity={50}
  />
);

export const SubpartWithLongName: React.FunctionComponent<IPartComponentProps> = () => (
  <Subpart
    id={2}
    name="screw lorem ipsum scripta manent verba volant"
    thumb="https://www.rifaidate.it/attrezzi/chiodi-e-viti/viti-passo-inglese_O1.jpg"
    quantity={250}
  />
);

export const SubpartNoImg: React.FunctionComponent<IPartComponentProps> = () => (
  <Subpart id={2} name="screw lorem ipsum scripta manent verba volant" quantity={250} />
);

export const SubpartNoQuantity: React.FunctionComponent<IPartComponentProps> = () => (
  <Subpart
    id={2}
    name="screw lorem ipsum scripta manent verba volant"
    thumb="https://www.rifaidate.it/attrezzi/chiodi-e-viti/viti-passo-inglese_O1.jpg"
  />
);
