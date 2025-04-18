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
import { getProduct } from "~/lib/getProducts";
import { useLoaderData } from "@remix-run/react";
import {
  json,
  type LoaderFunctionArgs,
} from "@shopify/remix-oxygen";




export async function loader({ context }: LoaderFunctionArgs) {
  const product = await getProduct("magnesium-l-threonate", context.env);
  const productA = await getProduct("magnesium-l-threonate-1"  ,context.env);
  return json({ product , productA});
}

export const Homepage: React.FC = () => {
  const { product , productA} = useLoaderData<{ 
    product: Product ,
    productA: Product,
   }>();

  return (
    <div className="w-full">
      <Hero />
      <GoalsComponent />
      <ForYou />
      <Results productsA={productA} />
      <Generation />
      <ProteidPowerServer product={product}/>
      <Articles />
      <InstagramComponent />
    </div>
  );
};

export default Homepage;





