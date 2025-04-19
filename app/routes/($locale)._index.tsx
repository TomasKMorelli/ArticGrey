import Hero from "~/components/Hero";
import GoalsComponent from "~/components/Goals";
import type { Product } from "@shopify/hydrogen/storefront-api-types";
import InstagramComponent from "~/components/InstagramComponent";
import Articles from "~/components/Articles";
import Generation from "~/components/Generation";
import { Results } from "~/components/Results";
import ForYou from "~/components/ForYou";
import React from "react";
import ProteidPowerServer from "~/components/ProteidPower";
import { getAllProduct, getProduct } from "~/lib/getProducts";
import { useLoaderData } from "@remix-run/react"
import {
  json,
  type LoaderFunctionArgs,
} from "@shopify/remix-oxygen";
import Products from "~/components/Products";
import ProductsFirst from "~/components/ProductsFirst";





export async function loader({ context }: LoaderFunctionArgs) {
  const product = await getProduct("magnesium-l-threonate", context.env);
  const productA = await getProduct("magnesium-l-threonate-1"  ,context.env);
  const allProducts = await getAllProduct(context.env);
  const productC = allProducts.slice(0, 4);
  const productB = allProducts.slice(-4);
  return json({ product , productA , productB , productC});
}

export const Homepage: React.FC = () => {
  const { product , productA , productB , productC} = useLoaderData<{ 
    product: Product ,
    productA: Product,
    productC : Product[]
    productB : Product[],
   }>();

  return (
    <div className="w-full">
      <Hero />
      <GoalsComponent />
      <ProductsFirst product={productC}/>
      <ForYou />
      <Results productsA={productA} />
      <Generation />
      <Products products={productB}/>
      <ProteidPowerServer product={product}/>
      <Articles />
      <InstagramComponent />
    </div>
  );
};

export default Homepage;





