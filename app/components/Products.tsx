import { Product } from "@shopify/hydrogen/storefront-api-types";
import React from "react";

type Props = {
  products: Product[];
};

export const Products: React.FC<Props> = ({ products }) => {
  return (
    <div className="px-6 py-10 mb-[75px]">

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
                  className={`pb-2 ${index === 0
                      ? "border-b-2 border-black font-semibold"
                      : "text-gray-500"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>


            <div className="flex items-center gap-4 mt-4 lg:mt-0">
              <button className="text-sm text-black underline whitespace-nowrap">
                View All Bundles
              </button>
              <div className="flex gap-2">
                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded bg-white text-black">
                  ←
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded bg-white text-black">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-[#F6F6F5] p-5 rounded-2xl flex flex-col justify-between"
          >

            {(product.tags.includes("Bestseller") ||
              product.tags.includes("New")) && (
                <div className="absolute top-3 left-3 bg-[#FFF27A] text-[10px] font-medium text-black px-2 py-0.5 rounded">
                  {product.tags.includes("Bestseller") ? "Bestseller" : "New"}
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

              <button className="bg-black text-white text-xs px-4 py-2 rounded-none hover:bg-gray-800">
                Add to Cart
              </button>

              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
