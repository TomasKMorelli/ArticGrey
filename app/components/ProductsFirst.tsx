import React from "react";
import { Product } from "@shopify/hydrogen/storefront-api-types";

type Props = {
  product: Product[];
};

export const ProductsFirst: React.FC<Props> = ({ product }) => {
  return (
    <div className="py-12 bg-[#F6F6F5] ">
      <div className="text-center mb-10">
        <p className="text-sm">✨ Trending</p>

        <div className="flex justify-center items-center mt-1 gap-[30px]">
          <button className="w-8 h-8 border border-black rounded-xs flex items-center justify-center hover:bg-black hover:text-white transition">
            <span className="text-sm">&#8592;</span>
          </button>

          <h2 className="text-3xl font-bold">Supplements</h2>

          <button className="w-8 h-8 border border-black rounded-xs flex items-center justify-center hover:bg-black hover:text-white transition">
            <span className="text-sm">&#8594;</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 px-4 md:px-0">
        {product.map((product) => {
          const tags = product.tags.map((tag) => tag.toLowerCase());

          return (
            <div
              key={product.id}
              className="relative bg-white p-6 rounded-2xl flex flex-col justify-between transition hover:shadow-lg"
            >
        
              {tags.includes("bestseller") && (
                <div className="absolute top-4 right-4 bg-yellow-200 text-xs font-medium text-black px-3 py-1 rounded">
                  Bestseller
                </div>
              )}

       
              <div className="w-full flex justify-center items-center min-h-[220px] mb-6">
                <img
                  src={product.featuredImage?.url}
                  alt={product.featuredImage?.altText ?? product.title}
                  className="max-h-[200px] object-contain"
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags
                  ?.filter(
                    (tag) =>
                      tag.toLowerCase() !== "new" &&
                      tag.toLowerCase() !== "bestseller"
                  )
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

              <div className="flex items-center justify-between mt-auto">
                <div className="text-black text-sm">★★★★★</div>
                <button className="bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800">
                  Add • $49.95
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsFirst;
