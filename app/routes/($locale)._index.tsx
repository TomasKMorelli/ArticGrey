import Hero from "~/components/Hero";
import GoalsComponent from "~/components/Goals";
import type { Product } from "@shopify/hydrogen/storefront-api-types";
import InstagramComponent from "~/components/InstagramComponent";
import Articles from "~/components/Articles";
import Generation from "~/components/Generation";
import { Results } from "~/components/Results";
import ForYou from "~/components/ForYou";
import React, { Suspense } from "react";
import ProteidPowerServer from "~/components/ProteidPower";
import { useLoaderData, Await } from "@remix-run/react";
import {
  defer,
  type LoaderFunctionArgs,
} from "@shopify/remix-oxygen";
import Products from "~/components/Products";
import ProductsFirst from "~/components/ProductsFirst";
import {
  BlogArticle,
  getBlog,
  getProductCollection,
  getVideoCollection,
} from "~/lib/getProducts";
import { TextSlider } from "~/components/TextSlider";
import FeaturedBanner from "~/components/FeaturedBanner";
import AsideModals from "~/components/AsidesModals";


type ExtendedProduct = Product & {
  metafield?: {
    value: string;
    type: string;
  };
};


export async function loader({ context }: LoaderFunctionArgs) {
  const supplements = await getProductCollection("supplements", context);
  const bestseller = await getProductCollection("bestseller", context);

  return defer({
    supplements,
    bestseller,
    bundles: getProductCollection("bundles", context),
    proteinpower: getProductCollection("proteinpower", context),
    blogs: getBlog("balanced-diet-1", context),
    collection: getVideoCollection("videos", context),
  });
}

export const Homepage: React.FC = () => {
  const { supplements, bundles, proteinpower, blogs, collection } =
    useLoaderData<{
      supplements: Product[];
      bestseller: Product[];
      bundles: Promise<Product[]>;
      proteinpower: Promise<Product[]>;
      blogs: Promise<BlogArticle[]>;
      collection: Promise<ExtendedProduct[]>;
    }>();

  return (
    <div>


      <Hero />
      <TextSlider />
      <FeaturedBanner />
      <GoalsComponent />
      <ProductsFirst product={supplements} />
      <ForYou />

      <Suspense fallback={null}>
        <Await resolve={collection}>
          {(data) => <Results collection={data} />}
        </Await>
      </Suspense>

      <Suspense fallback={null}>
        <Await resolve={bundles}>
          {(data) => <Products productB={data} />}
        </Await>
      </Suspense>


      <Suspense fallback={null}>

        <Await resolve={proteinpower}>
          {(data) => <ProteidPowerServer productS={data} />}
        </Await>

      </Suspense>



      <Suspense fallback={null}>
        <Generation />
        <Await resolve={blogs}>
          {(data) => <Articles blogs={data} />}
        </Await>
      </Suspense> 

      <InstagramComponent /> 

      <AsideModals/>
    </div>









  );
};

export default Homepage;

















