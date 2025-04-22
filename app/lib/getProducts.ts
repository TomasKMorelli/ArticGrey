import type { LoaderFunctionArgs } from "@remix-run/server-runtime";
import type { Product } from "@shopify/hydrogen/storefront-api-types";
import { BLOGS_QUERY, COLLECTION_PRODUCTS_QUERY, COLLECTION_VIDEO_QUERY } from "~/graphql/customer-account/productsQuery";

type CollectionProductsQueryResponse = {
  collection: {
    title: string;
    products: {
      edges: {
        node: Product;
      }[];
    };
  } | null;
};

type CollectionQueryResponse = {
  collection: {
    title: string;
    products: {
      edges: {
        node: Product & {
          metafield?: {
            value: string;
            type: string;
          };
        };
      }[];
    };
  } | null;
};

export type BlogArticle = {
  title: string;
  handle: string;
  publishedAt: string;
  excerpt: string;
  author: {
    name: string;
  };
  blog: {
    title: string;
  };
  image?: {
    url: string;
    altText?: string;
  };
};




export const getProductCollection = async (
  handle: string,
  { storefront }: LoaderFunctionArgs["context"]
): Promise<Product[]> => {
  try {
    const { collection } = await storefront.query<CollectionProductsQueryResponse>(
      COLLECTION_PRODUCTS_QUERY,
      { variables: { handle } }
    );

    if (!collection) return [];

    return collection.products.edges.map((edge) => edge.node);
  } catch (error) {
    console.error(`Error fetching collection "${handle}":`, error);
    return [];
  }
};


export const getBlog = async (
  handle: string,
  { storefront }: LoaderFunctionArgs["context"]
): Promise<BlogArticle[]> => {
  try {
    const data = await storefront.query(BLOGS_QUERY);
    const edges = data?.blog?.articles?.edges;
    if (!edges) return [];
    return edges.map((edge: any) => edge.node as BlogArticle);
  } catch (error) {
    console.error(`Error fetching blog "${handle}":`, error);
    return [];
  }
};



export const getVideoCollection = async (
  handle: string,
  { storefront }: LoaderFunctionArgs["context"]
): Promise<(Product & { metafield?: { value: string; type: string } })[]> => {
  try {
    const { collection } = await storefront.query<CollectionQueryResponse>(
      COLLECTION_VIDEO_QUERY,
      { variables: { handle } }
    );

    if (!collection) return [];

    return collection.products.edges.map((edge) => edge.node);
  } catch (error) {
    console.error(`Error fetching collection "${handle}":`, error);
    return [];
  }
};