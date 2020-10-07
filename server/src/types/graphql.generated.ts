import { GraphQLResolveInfo } from 'graphql';
import { RimaModelsContext } from '../context';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type MacroProduct = {
  __typename?: 'MacroProduct';
  id: Scalars['Int'];
  parentPartNo: Scalars['Int'];
  childPartNo: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  macroProduct?: Maybe<MacroProduct>;
  macroProducts: Array<MacroProduct>;
  part?: Maybe<Part>;
  parts: Array<Part>;
};


export type QueryMacroProductArgs = {
  id: Scalars['Int'];
};


export type QueryPartArgs = {
  id: Scalars['Int'];
};

export type Part = {
  __typename?: 'Part';
  id: Scalars['Int'];
  name: Scalars['String'];
  thumb?: Maybe<Scalars['String']>;
  manual?: Maybe<Scalars['String']>;
  drawings?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  subparts?: Maybe<Array<Part>>;
  parentId?: Maybe<Scalars['Int']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  MacroProduct: ResolverTypeWrapper<MacroProduct>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  Part: ResolverTypeWrapper<Part>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  MacroProduct: MacroProduct;
  Int: Scalars['Int'];
  Query: {};
  Part: Part;
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
}>;

export type MacroProductResolvers<ContextType = RimaModelsContext, ParentType extends ResolversParentTypes['MacroProduct'] = ResolversParentTypes['MacroProduct']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  parentPartNo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  childPartNo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type QueryResolvers<ContextType = RimaModelsContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  macroProduct?: Resolver<Maybe<ResolversTypes['MacroProduct']>, ParentType, ContextType, RequireFields<QueryMacroProductArgs, 'id'>>;
  macroProducts?: Resolver<Array<ResolversTypes['MacroProduct']>, ParentType, ContextType>;
  part?: Resolver<Maybe<ResolversTypes['Part']>, ParentType, ContextType, RequireFields<QueryPartArgs, 'id'>>;
  parts?: Resolver<Array<ResolversTypes['Part']>, ParentType, ContextType>;
}>;

export type PartResolvers<ContextType = RimaModelsContext, ParentType extends ResolversParentTypes['Part'] = ResolversParentTypes['Part']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumb?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manual?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  drawings?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subparts?: Resolver<Maybe<Array<ResolversTypes['Part']>>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Resolvers<ContextType = RimaModelsContext> = ResolversObject<{
  MacroProduct?: MacroProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Part?: PartResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = RimaModelsContext> = Resolvers<ContextType>;
