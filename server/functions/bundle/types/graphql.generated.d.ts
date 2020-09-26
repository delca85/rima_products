import { GraphQLResolveInfo } from 'graphql';
import { RimaModelsContext } from '../context';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type RequireFields<T, K extends keyof T> = {
    [X in Exclude<keyof T, K>]?: T[X];
} & {
    [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};
export declare type MacroProduct = {
    __typename?: 'MacroProduct';
    id: Scalars['Int'];
    parentPartNo: Scalars['Int'];
    childPartNo: Scalars['Int'];
    quantity: Scalars['Int'];
};
export declare type Query = {
    __typename?: 'Query';
    macroProduct?: Maybe<MacroProduct>;
    macroProducts: Array<MacroProduct>;
    part?: Maybe<Part>;
    parts: Array<Part>;
};
export declare type QueryMacroProductArgs = {
    id: Scalars['Int'];
};
export declare type QueryPartArgs = {
    id: Scalars['Int'];
};
export declare type Part = {
    __typename?: 'Part';
    id: Scalars['Int'];
    name: Scalars['String'];
    thumb?: Maybe<Scalars['String']>;
    quantity?: Maybe<Scalars['Int']>;
    subparts?: Maybe<Array<Part>>;
    parentId?: Maybe<Scalars['Int']>;
};
export declare type WithIndex<TObject> = TObject & Record<string, any>;
export declare type ResolversObject<TObject> = WithIndex<TObject>;
export declare type ResolverTypeWrapper<T> = Promise<T> | T;
export declare type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;
export declare type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;
export declare type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;
export declare type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{
        [key in TKey]: TResult;
    }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, {
        [key in TKey]: TResult;
    }, TContext, TArgs>;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export declare type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> = SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs> | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export declare type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> = ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>) | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export declare type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes> | Promise<Maybe<TTypes>>;
export declare type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
export declare type NextResolverFn<T> = () => Promise<T>;
export declare type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (next: NextResolverFn<TResult>, parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
/** Mapping between all available schema types and the resolvers types */
export declare type ResolversTypes = ResolversObject<{
    MacroProduct: ResolverTypeWrapper<MacroProduct>;
    Int: ResolverTypeWrapper<Scalars['Int']>;
    Query: ResolverTypeWrapper<{}>;
    Part: ResolverTypeWrapper<Part>;
    String: ResolverTypeWrapper<Scalars['String']>;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;
/** Mapping between all available schema types and the resolvers parents */
export declare type ResolversParentTypes = ResolversObject<{
    MacroProduct: MacroProduct;
    Int: Scalars['Int'];
    Query: {};
    Part: Part;
    String: Scalars['String'];
    Boolean: Scalars['Boolean'];
}>;
export declare type MacroProductResolvers<ContextType = RimaModelsContext, ParentType extends ResolversParentTypes['MacroProduct'] = ResolversParentTypes['MacroProduct']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    parentPartNo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    childPartNo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;
export declare type QueryResolvers<ContextType = RimaModelsContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
    macroProduct?: Resolver<Maybe<ResolversTypes['MacroProduct']>, ParentType, ContextType, RequireFields<QueryMacroProductArgs, 'id'>>;
    macroProducts?: Resolver<Array<ResolversTypes['MacroProduct']>, ParentType, ContextType>;
    part?: Resolver<Maybe<ResolversTypes['Part']>, ParentType, ContextType, RequireFields<QueryPartArgs, 'id'>>;
    parts?: Resolver<Array<ResolversTypes['Part']>, ParentType, ContextType>;
}>;
export declare type PartResolvers<ContextType = RimaModelsContext, ParentType extends ResolversParentTypes['Part'] = ResolversParentTypes['Part']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    thumb?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    subparts?: Resolver<Maybe<Array<ResolversTypes['Part']>>, ParentType, ContextType>;
    parentId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;
export declare type Resolvers<ContextType = RimaModelsContext> = ResolversObject<{
    MacroProduct?: MacroProductResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    Part?: PartResolvers<ContextType>;
}>;
/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export declare type IResolvers<ContextType = RimaModelsContext> = Resolvers<ContextType>;
