import React from "react";
import { videos } from "~/helpers/videos";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Product } from "@shopify/hydrogen/storefront-api-types";

type Props = {
  productsA: Product;
};

export const Results: React.FC<Props> = ({ productsA }) => {
  return (
    <div className="w-full min-h-screen mx-auto px-[40px] flex flex-col items-center bg-[#F6F6F5]">
 
      <div className="w-full flex items-center justify-center mt-[40px] mb-[50px] relative">
        <button className="absolute left-0 w-[40px] h-[40px] border border-black flex items-center justify-center">
          <ArrowLeft size={20} color="black" />
        </button>
        <div className="flex flex-col items-center space-y-[8px]">
          <p className="text-[16px] font-normal text-black">
            Trusted & Proven by Science
          </p>
          <h1 className="text-[40px] font-medium text-black text-center">
            Real People. Real Results.
          </h1>
          <a
            href="#"
            className="text-[12px] underline text-black font-normal mt-[9px]"
          >
            View All
          </a>
        </div>
        <button className="absolute right-0 w-[40px] h-[40px] border border-black flex items-center justify-center">
          <ArrowRight size={20} color="black" />
        </button>
      </div>

  
      <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-[12px] justify-center pb-[40px]">
        {videos.map((vid, ind) => (
          <div
            key={ind}
            className="inline-block w-[300px] flex-shrink-0"
          >
 
            <div className="w-full h-[500px] rounded-[8px] overflow-hidden">
              <video
                src={vid.video}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
            </div>


            <div className="w-full bg-white p-3 flex items-start gap-3 rounded-b-[8px] mt-[15px]">
              <img
                src={productsA.featuredImage?.url}
                alt={productsA.title}
                className="w-[60px] h-[60px] object-contain"
              />
              <div className="flex flex-col justify-center items-start content-center">
                <h5 className="text-black text-[14px] font-medium leading-tight mt-[10px]">
                  {productsA.title}
                </h5>
                <p className="text-black text-[14px] mt-[3px]">
                  ${productsA.priceRange.minVariantPrice.amount}
                </p>
              </div>
              <div className="ml-auto flex items-center justify-center w-[28px] h-[28px] border mt-[12px] border-black rounded-full text-white bg-black text-[20px] leading-none">
              <span className="text-white text-[16px] leading-none">+</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
