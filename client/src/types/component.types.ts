import { ReactNode } from 'react';

export interface IRimaComponentProps {
  className?: string;
  children?: ReactNode;
}

export interface IPartComponentProps extends IRimaComponentProps {
  id: number;
  name: string;
  thumb?: string;
  quantity?: number;
}
