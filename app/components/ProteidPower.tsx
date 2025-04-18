import type { Product } from "@shopify/hydrogen/storefront-api-types";
import { GiThreeLeaves } from "react-icons/gi";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
  product: Product;
};

export const ProteidPowerServer: React.FC<Props> = ({ product }) => {
  return (
    <div className="relative w-full bg-[#f6f5f3] p-[100px] px-4 flex justify-center">
      <button className="absolute left-2 top-1/2 -translate-y-1/2 w-[40px] h-[40px] border border-black flex items-center justify-center bg-white z-10 rounded-md">
        <ArrowLeft size={20} color="black" />
      </button>

      <div className="max-w-6xl w-full bg-white rounded-xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center bg-white p-8">
          {product.featuredImage?.url ? (
            <img
              src={product.featuredImage.url}
              alt={product.featuredImage.altText || product.title}
              className="w-full max-w-[320px] h-auto object-contain"
            />
          ) : (
            <p>No image available</p>
          )}
        </div>
        <div className="flex flex-col">
          <div className="bg-black text-white px-8 py-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-center mb-6">The Blend</h3>
            <div className="flex justify-between max-w-md mx-auto">
              {["Whey Based", "Build Muscle", "Clean Ingredients"].map((item) => (
                <div className="flex flex-col items-center gap-1" key={item}>
                  <div className="bg-[#2a2a2a] rounded-full p-2">
                    <GiThreeLeaves className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col px-6 py-6 gap-6">
            <h4 className="text-center text-lg font-semibold">Active Ingredients</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="bg-[#f0f0f0] rounded-full p-2 mb-2">
                    <GiThreeLeaves className="w-6 h-6 text-black" />
                  </div>
                  <p className="font-semibold">Whey Protein Isolate</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Low Calorie With Virtually No Fat or Lactose, Quickly
                    Absorbed To Maximize Muscle Building & Repair.
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition">
                Customize This Blend
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="absolute right-2 top-1/2 -translate-y-1/2 w-[40px] h-[40px] border border-black flex items-center justify-center bg-white z-10 rounded-md">
        <ArrowRight size={20} color="black" />
      </button>
    </div>
  );
};

export default ProteidPowerServer;

