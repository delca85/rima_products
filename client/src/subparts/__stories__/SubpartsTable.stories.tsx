import React from 'react';
import SubpartsTable, { ISubpartsTableProps } from '../SubpartsTable';

export default {
  title: 'SubpartsTable',
  component: SubpartsTable,
};

const subparts = [
  {
    id: 2,
    name: 'screw',
    thumb: 'https://www.rifaidate.it/attrezzi/chiodi-e-viti/viti-passo-inglese_O1.jpg',
    quantity: 50,
  },

  {
    id: 3,
    name: 'screw diece lorem ipsum long',
    thumb:
      'https://cdn.manomano.com/100-pz-dado-dadi-zincato-mm-4-m4-vite-bullone-esagonale-L-4845234-9124801_1.jpg',
    quantity: 250,
  },
];

export const SubpartsTableWithTwoElements: React.FunctionComponent<ISubpartsTableProps> = () => (
  <SubpartsTable subparts={subparts} />
);

export const SubpartsTableNoElements: React.FunctionComponent<ISubpartsTableProps> = () => (
  <SubpartsTable subparts={[]} />
);
