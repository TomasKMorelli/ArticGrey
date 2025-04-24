import { Product } from "@shopify/hydrogen/storefront-api-types";
import React, { useRef } from "react";
import { AddToCartButton } from "./AddToCartButton";
import { useAside } from "./Aside";

type Props = {
  productB: Product[];
};

export const Products: React.FC<Props> = ({ productB }) => {
  const { open } = useAside();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -385 : 385,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-center mt-[50px]">
      <div className="max-w-[1520px] w-full px-4">
        <div className="flex items-center text-sm text-black mb-1">
          <span className="mr-2">📦</span> Goals Specific
        </div>

      
        <div className="w-full relative mb-8">
    
          <div className="hidden lg:flex items-center justify-between h-[74px]">
            <h2 className="text-4xl font-bold text-black whitespace-nowrap">
              Bundles
            </h2>

            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div className="flex gap-6 text-sm border-b border-gray-200 pb-2">
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
            </div>

            <div className="flex flex-col items-end gap-2 min-w-[180px]">
              <button className="text-sm text-black underline whitespace-nowrap">
                View All Bundles
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => scroll("left")}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded bg-white text-black hover:bg-gray-100 transition"
                >
                  ←
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded bg-white text-black hover:bg-gray-100 transition"
                >
                  →
                </button>
              </div>
            </div>
          </div>

        
          <div className="flex flex-col items-center gap-4 lg:hidden">
            <h2 className="text-4xl font-bold text-black text-center">
              Bundles
            </h2>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm border-b border-gray-200 pb-2">
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

            <div className="flex flex-col items-center gap-2">
              <button className="text-sm text-black underline whitespace-nowrap">
                View All Bundles
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => scroll("left")}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded bg-white text-black hover:bg-gray-100 transition"
                >
                  ←
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded bg-white text-black hover:bg-gray-100 transition"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

     
        <div className="relative w-full overflow-hidden h-[505px]">
          <div
            ref={scrollRef}
            className="flex gap-[20px] scroll-smooth overflow-x-auto hide-scrollbar"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {productB.map((product) => {
              const variantId = product.variants?.edges?.[0]?.node?.id;

              return (
                <div
                  key={product.id}
                  className="w-[355px] shrink-0 h-[475px] scroll-snap-align-start bg-[#F6F6F5] p-5 rounded-2xl flex flex-col justify-between relative"
                >
                  {(product.tags?.includes("Bestseller") ||
                    product.tags?.includes("New")) && (
                    <div className="absolute top-3 left-3 bg-[#FFF27A] text-[10px] font-medium text-black px-2 py-0.5 rounded">
                      {product.tags.includes("Bestseller")
                        ? "Bestseller"
                        : "New"}
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
                      <button
                        onClick={() => open("cart")}
                        className="bg-black text-white text-xs px-4 py-2 rounded-none hover:bg-gray-800 transition"
                      >
                        Add to Cart
                      </button>
                    </AddToCartButton>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
