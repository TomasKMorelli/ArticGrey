import { getProductHandle } from "~/graphql/customer-account/productsQuery";
import type { Product } from "@shopify/hydrogen/storefront-api-types";
import type { AppLoadContext } from "@shopify/remix-oxygen";
import { getAllProductsQuery } from "~/graphql/customer-account/productsQuery";

export const getProduct = async (
  handle: string,
  env: AppLoadContext["env"]
): Promise<Product> => {

  const token = env.PUBLIC_STOREFRONT_API_TOKEN;

  const response = await fetch("https://uncmfrtd-com.myshopify.com/api/2023-10/graphql.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token!,
    },
    body: JSON.stringify({
      query: getProductHandle,
      variables: { handle },
    }),
  });

  const json = await response.json() as {
    data?: {
      productByHandle?: Product;
    };
    errors?: any;
  };

  if (!json.data || !json.data.productByHandle) {
    throw new Error("Product not found or invalid response structure.");
  }

  return json.data.productByHandle;
};


export const getAllProduct = async (
  env: AppLoadContext["env"]
): Promise<Product[]> => {
  const token = env.PUBLIC_STOREFRONT_API_TOKEN;

  try {
    const response = await fetch("https://uncmfrtd-com.myshopify.com/api/2023-10/graphql.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token!,
      },
      body: JSON.stringify({ query: getAllProductsQuery }),
    });

    const json = await response.json() as {
      data?: {
        products?: {
          edges: {
            node: Product;
          }[];
        };
      };
      errors?: any;
    };

    if (!json.data || !json.data.products) {
      throw new Error("Products not found or invalid response structure.");
    }

    const products = json.data.products.edges.map((edge) => edge.node);

    return products;
  } catch (error) {
    console.log("Error fetching products:", error);
    throw new Error("Error with fetching products");
  }
};