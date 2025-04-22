import React, { useRef, useState } from "react";
import { Product } from "@shopify/hydrogen/storefront-api-types";
import { AddToCartButton } from "./AddToCartButton";



type Props = {
  product: Product[];
};

export const ProductsFirst: React.FC<Props> = ({ product }) => {

  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    <div className="py-7 w-full bg-[#F6F6F5] mt-[28px] mb-[35px]">
      <div className="text-center mb-10">
        <p className="text-sm">✨ Trending</p>
        <div className="flex justify-center items-center mt-1 gap-[30px]">
          <button
            onClick={() => scroll("left")}
            className="w-8 h-8 border border-black rounded-xs flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <span className="text-sm">&#8592;</span>
          </button>
          <h2 className="text-3xl font-bold">Supplements</h2>
          <button
            onClick={() => scroll("right")}
            className="w-8 h-8 border border-black rounded-xs flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <span className="text-sm">&#8594;</span>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-4 hide-scrollbar"
      >
        {product.map((product, index) => {
          const variantId = product.variants?.edges?.[0]?.node?.id;
          const tags = product.tags?.map((tag) => tag.toLowerCase()) ?? [];

          return (
            <div
              key={product.id}
              className="min-w-[300px] shrink-0 group relative bg-white p-6 rounded-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out hover:shadow-xl"
            >
              {tags.includes("bestseller") && (
                <div className="absolute top-4 right-4 bg-yellow-200 text-xs font-medium text-black px-3 py-1 rounded">
                  Bestseller
                </div>
              )}

              <div className="w-full flex justify-center items-center min-h-[220px] mb-6 overflow-hidden">
                {product.featuredImage?.url && (
                  <img
                    src={product.featuredImage.url}
                    alt={product.featuredImage.altText ?? product.title}
                    className="max-h-[200px] object-contain transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {tags
                  .filter((tag) => tag !== "new" && tag !== "bestseller")
                  .map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center bg-[#F0F0F0] text-xs text-black px-3 py-1 rounded-full"
                    >
                      <span className="w-1.5 h-1.5 bg-black rounded-full mr-2" />
                      {tag}
                    </div>
                  ))}
              </div>

              <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
              <p className="text-sm text-gray-500 mb-5">
                {product.description || "Supports wellness and recovery."}
              </p>

              <div
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {hoveredIndex === index && (
                  <div className="absolute z-30 left-0 w-full bottom-full mb-2 bg-white p-6 rounded-2xl shadow-xl">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <label className="flex flex-col justify-between border rounded-xl p-4 cursor-pointer hover:border-black transition">
                        <div className="flex items-start gap-2">
                          <input
                            type="radio"
                            name={`purchase-${index}`}
                            defaultChecked
                            className="mt-1"
                          />
                          <div>
                            <p className="font-medium text-base leading-tight">
                              One-Time Purchase
                            </p>
                            <p className="font-bold text-lg mt-2">$49.95</p>
                          </div>
                        </div>
                      </label>
                      <label className="flex flex-col justify-between border rounded-xl p-4 cursor-pointer hover:border-black transition">
                        <div className="flex items-start gap-2">
                          <input
                            type="radio"
                            name={`purchase-${index}`}
                            className="mt-1"
                          />
                          <div>
                            <p className="font-medium text-base leading-tight">
                              Subscribe & Save
                            </p>
                            <p className="font-bold text-lg mt-2">
                              $39.96{" "}
                              <span className="text-[#A35115] font-semibold">
                                Save 10%
                              </span>
                            </p>
                          </div>
                        </div>
                      </label>
                    </div>
                    <AddToCartButton
                      lines={[
                        {
                          merchandiseId: variantId,
                          quantity: 1,
                        },
                      ]}
                    >
                      <button className="w-[298px] bg-black text-white font-normal py-2 rounded-lg hover:bg-gray-900 transition mb-4 mx-auto flex justify-center items-center">
                        Add to Cart - $49.95
                      </button>
                    </AddToCartButton>

                    <p className="text-center underline text-sm text-black cursor-pointer hover:text-gray-800">
                      View Full Details
                    </p>
                  </div>
                )}

                <AddToCartButton
                  lines={[
                    {
                      merchandiseId: variantId,
                      quantity: 1,
                    },
                  ]}
                >
                  <button className="w-full bg-[#1A1A1A] text-white text-sm px-4 py-2 rounded-md font-medium hover:bg-[#2a2a2a] transition">
                    Add to Cart - $49.95
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

export default ProductsFirst;
