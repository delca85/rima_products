import { default as React, useMemo } from 'react';
import { ApolloProvider } from '@apollo/client';
import buildApolloClient from './client';
import { IRimaComponentProps } from '../types/component.types';

const RimaApolloProvider = ({ children }: IRimaComponentProps) => {
  const client = useMemo(() => buildApolloClient(), []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default RimaApolloProvider;
