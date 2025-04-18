import { getProductHandle } from "~/graphql/customer-account/productsQuery";
import type { Product } from "@shopify/hydrogen/storefront-api-types";
import type { AppLoadContext } from "@shopify/remix-oxygen";

export const getProduct = async (
  handle: string,
  env: AppLoadContext["env"]
): Promise<Product> => {

  console.log("🧪 Checking raw handle:", JSON.stringify(handle));
  console.log("Requested handle:", handle);
  const token = env.PUBLIC_STOREFRONT_API_TOKEN;
  console.log("Storefront token:", env.PUBLIC_STOREFRONT_API_TOKEN);

  const response = await fetch("https://uncmfrtd-com.myshopify.com/api/2023-10/graphql.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token!,
    },
    body: JSON.stringify({
      query: getProductHandle,
      variables:{handle}, 
    }),
  });

  
  const json = await response.json() as {
    data?: {
      productByHandle?: Product;
    };
    errors?: any;
  };

 
  console.log("GraphQL JSON Response:", JSON.stringify(json, null, 2));


  if (json.errors) {
    console.error("GraphQL Errors:", JSON.stringify(json.errors, null, 2));
    throw new Error(`GraphQL returned errors: ${JSON.stringify(json.errors, null, 2)}`);
  }


  if (!json.data || !json.data.productByHandle) {
    throw new Error("Product not found or invalid response structure.");
  }

  return json.data.productByHandle;
};
