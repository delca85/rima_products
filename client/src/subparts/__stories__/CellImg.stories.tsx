import { default as React } from 'react';
import CellImg, { ICellImgProps } from '../CellImg';

export default {
  title: 'CellImg',
  component: CellImg,
  decorators: [
    (Story: React.ElementType) => (
      <table>
        <tbody>
          <tr>
            <Story />
          </tr>
        </tbody>
      </table>
    ),
  ],
};

export const CellImgDefault: React.FunctionComponent<ICellImgProps> = () => (
  <CellImg
    src="https://www.rifaidate.it/attrezzi/chiodi-e-viti/viti-passo-inglese_O1.jpg"
    altText="FAKE_ALT_TEXT"
  />
);

export const CellImgNoSrc: React.FunctionComponent<ICellImgProps> = () => (
  <CellImg altText="FAKE_ALT_TEXT" />
);
