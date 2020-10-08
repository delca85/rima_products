import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type tPart = {
  __typename?: 'Part';
  id: Scalars['Int'];
  name: Scalars['String'];
  thumb?: Maybe<Scalars['String']>;
  manual?: Maybe<Scalars['String']>;
  drawings?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  subparts?: Maybe<Array<tPart>>;
  parentId?: Maybe<Scalars['Int']>;
};

export type tQuery = {
  __typename?: 'Query';
  parts: Array<tPart>;
  part?: Maybe<tPart>;
  macroProducts: Array<tMacroProduct>;
  macroProduct?: Maybe<tMacroProduct>;
};


export type tQueryPartArgs = {
  id: Scalars['Int'];
};


export type tQueryMacroProductArgs = {
  id: Scalars['Int'];
};

export type tMacroProduct = {
  __typename?: 'MacroProduct';
  id: Scalars['Int'];
  parentPartNo: Scalars['Int'];
  childPartNo: Scalars['Int'];
  quantity: Scalars['Int'];
};

export enum tCacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type tPartsQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type tPartsQuery = { __typename?: 'Query', part?: Maybe<{ __typename?: 'Part', id: number, name: string, thumb?: Maybe<string>, manual?: Maybe<string>, drawings?: Maybe<string>, subparts?: Maybe<Array<{ __typename?: 'Part', id: number, name: string, thumb?: Maybe<string>, quantity?: Maybe<number>, subparts?: Maybe<Array<{ __typename?: 'Part', id: number, name: string, thumb?: Maybe<string>, quantity?: Maybe<number> }>> }>> }> };


export const PartsDocument = gql`
    query Parts($id: Int!) {
  part(id: $id) {
    id
    name
    thumb
    manual
    drawings
    subparts {
      id
      name
      thumb
      quantity
      subparts {
        id
        name
        thumb
        quantity
      }
    }
  }
}
    `;
export function usePartsQuery(baseOptions?: Apollo.QueryHookOptions<tPartsQuery, tPartsQueryVariables>) {
        return Apollo.useQuery<tPartsQuery, tPartsQueryVariables>(PartsDocument, baseOptions);
      }
export function usePartsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<tPartsQuery, tPartsQueryVariables>) {
          return Apollo.useLazyQuery<tPartsQuery, tPartsQueryVariables>(PartsDocument, baseOptions);
        }
export type PartsQueryHookResult = ReturnType<typeof usePartsQuery>;
export type PartsLazyQueryHookResult = ReturnType<typeof usePartsLazyQuery>;
export type PartsQueryResult = Apollo.QueryResult<tPartsQuery, tPartsQueryVariables>;