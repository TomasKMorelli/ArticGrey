import React, { useRef } from "react";
import { Product } from "@shopify/hydrogen/storefront-api-types";
import { AddToCartButton } from "./AddToCartButton";
import { useAside } from "./Aside";
import { FaStar } from "react-icons/fa";

type Props = {
  product: Product[];
};

export const ProductsFirst: React.FC<Props> = ({ product }) => {
  const { open } = useAside();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = 365 + 24;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -offset : offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-[#F6F6F5] mt-[60px] px-4 sm:px-8">
      <div className="text-center mb-14">
        <p className="text-sm">✨ Trending</p>
        <div className="flex justify-center items-center mt-1 gap-6">
          <button
            onClick={() => scroll("left")}
            className="w-8 h-8 border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            ←
          </button>
          <h2 className="text-5xl font-bold">Supplements</h2>
          <button
            onClick={() => scroll("right")}
            className="w-8 h-8 border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1 sm:px-6 hide-scrollbar max-w-full sm:max-w-[calc(365px*2+40px)] md:max-w-[calc(365px*3+40px*2)] lg:max-w-[calc(365px*4+40px*3)] mx-auto"
      >
        {product.map((product) => {
          const variantId = product.variants?.edges?.[0]?.node?.id;
          const tags = product.tags?.map((tag) => tag.toLowerCase()) ;

          return (
            <div
              key={product.id}
              className="
              w-full
              max-w-[90%]
              sm:max-w-[50%]
              md:max-w-[33.3333%]
              lg:max-w-[23%]
              xl:max-w-[23.5%]
              2xl:max-w-[23.8%]
              h-[520px]
              shrink-0
              snap-start
              bg-white
              p-8
              rounded-2xl
              flex flex-col justify-between
              transition-transform
              hover:shadow-xl
              relative
              group
            "
            >
              {tags.includes("bestseller") && (
                <div className="absolute top-4 right-4 bg-yellow-200 text-xs font-medium text-black px-3 py-1 rounded">
                  Bestseller
                </div>
              )}

              <div className="flex justify-center items-center min-h-[220px] mb-6 overflow-hidden">
                {product.featuredImage?.url && (
                  <img
                    src={product.featuredImage.url}
                    alt={product.featuredImage.altText ?? product.title}
                    className="max-h-[200px] object-contain transform transition-transform group-hover:scale-105"
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
              <p className="text-sm text-gray-500 mb-3">
                {product.description || "Supports wellness and recovery."}
              </p>

              <div className="relative">
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} className="text-black w-4 h-4" />
                      ))}
                  </div>

                  <AddToCartButton
                    lines={[{ merchandiseId: variantId, quantity: 1 }]}
                  >
                    <button
                      onClick={() => open("cart")}
                      className="bg-[#1A1A1A] text-white text-sm px-4 py-2 rounded-md font-medium hover:bg-[#2a2a2a] transition"
                    >
                      Add • $49.00
                    </button>
                  </AddToCartButton>
                </div>

       
                <div className="absolute z-30 left-0 w-full bottom-full mb-2 bg-white p-6 rounded-2xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="flex flex-col gap-4 mb-5">
                    {[
                      {
                        label: "One-Time Purchase",
                        price: "$49.95",
                        defaultChecked: true,
                      },
                      {
                        label: "Subscribe & Save",
                        price: "$39.96",
                        discount: "Save 10%",
                      },
                    ].map((option, i) => (
                      <label
                        key={i}
                        className="flex items-start gap-3 border border-gray-300 rounded-xl p-4 hover:border-black transition cursor-pointer"
                      >
                        <input
                          type="radio"
                          name={`purchase-${product.id}`}
                          className="mt-1 accent-black"
                          defaultChecked={option.defaultChecked}
                        />
                        <div>
                          <p className="font-medium text-sm">{option.label}</p>
                          <p className="font-bold text-base mt-1">
                            {option.price}{" "}
                            {option.discount && (
                              <span className="text-[#A35115] font-semibold ml-1">
                                {option.discount}
                              </span>
                            )}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>

                  <AddToCartButton
                    lines={[{ merchandiseId: variantId, quantity: 1 }]}
                  >
                    <button
                      onClick={() => open("cart")}
                      className="block w-fit mx-auto bg-black text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-gray-900 transition"
                    >
                      Add to Cart - $49.95
                    </button>
                  </AddToCartButton>

                  <p className="text-center underline text-sm text-black hover:text-gray-800 cursor-pointer mt-3">
                    View Full Details
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsFirst;
