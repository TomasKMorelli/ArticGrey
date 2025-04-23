import { Product } from "@shopify/hydrogen/storefront-api-types";
import React, { useRef } from "react";
import { AddToCartButton } from "./AddToCartButton";
import { useAside } from "./Aside";



type Props = {
  productB: Product[];
};

export const Products: React.FC<Props> = ({ productB }) => {

const {open} = useAside()

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 350;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-[1600px] mt-[20px] ">
      <div className="flex flex-col gap-6 mb-8">
        <div>
          <div className="flex items-center text-sm text-black mb-1">
            <span className="mr-2">📦</span> Goals Specific
          </div>

          <div className="flex flex-wrap items-center justify-between">
            <h2 className="text-4xl font-bold text-black mb-2">Bundles</h2>

            <div className="flex flex-wrap gap-6 text-sm text-black border-b border-gray-200 w-full lg:w-auto">
              {[
                "Sleep",
                "Cognitive Function",
                "Foundational Health",
                "Athletic Performance",
                "Hormone Support",
              ].map((tab, index) => (
                <button
                  key={tab}
                  className={`pb-2 ${
                    index === 0
                      ? "border-b-2 border-black font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 ">
              <button className="text-sm text-black underline whitespace-nowrap">
                View All Bundles
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => scroll("left")}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded bg-white text-black"
                >
                  ←
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded bg-white text-black"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-1 hide-scrollbar"
      >
        {productB.map((product) => {
          const variantId = product.variants?.edges?.[0]?.node?.id;

          return (
            <div
              key={product.id}
              className="min-w-[300px] shrink-0 relative bg-[#F6F6F5] p-5 rounded-2xl flex flex-col justify-between"
            >
              {(product.tags?.includes("Bestseller") ||
                product.tags?.includes("New")) && (
                <div className="absolute top-3 left-3 bg-[#FFF27A] text-[10px] font-medium text-black px-2 py-0.5 rounded">
                  {product.tags?.includes("Bestseller") ? "Bestseller" : "New"}
                </div>
              )}

              <div className="min-h-[200px] flex items-center justify-center mb-4">
                <img
                  src={product.featuredImage?.url}
                  alt={product.featuredImage?.altText ?? product.title}
                  className="max-h-[180px] object-contain"
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {product.tags
                  ?.filter((tag) => tag !== "New" && tag !== "Bestseller")
                  .map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center bg-white text-xs text-black px-3 py-1 rounded-full whitespace-nowrap"
                    >
                      <span className="w-1.5 h-1.5 bg-black rounded-full mr-2" />
                      {tag}
                    </div>
                  ))}
              </div>

              <h3 className="font-semibold text-base mb-1">
                {product.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                {product.productType || "Supplement"}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div className="text-black text-sm">★★★★★</div>

                <AddToCartButton
                  lines={[
                    {
                      merchandiseId: variantId,
                      quantity: 1,
                    },
                  ]}
                >
                  <button  onClick={()=>open("cart")}       className="bg-black text-white text-xs px-4 py-2 rounded-none hover:bg-gray-800">
                    Add to Cart
                  </button>
                </AddToCartButton>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
