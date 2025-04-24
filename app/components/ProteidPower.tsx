import type { Product } from "@shopify/hydrogen/storefront-api-types";
import { useRef } from "react";
import { GiThreeLeaves } from "react-icons/gi";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
  productS: Product[];
};

export const ProteidPowerServer: React.FC<Props> = ({ productS }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const width = container.clientWidth;
      container.scrollBy({
        left: direction === "left" ? -width : width,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="relative w-full bg-[#f6f5f3] py-[90px] px-4 flex flex-col items-center">
      <div className="text-center mb-12 w-full">
        <p className="text-sm text-gray-700 mb-1">Simple & Effective Ingredients</p>
        <h2 className="text-3xl md:text-4xl font-bold">Customized Protein Powder</h2>
        <div className="flex flex-col items-center gap-4 mt-6 md:hidden">
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 border border-black rounded-md bg-white flex items-center justify-center"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 border border-black rounded-md bg-white flex items-center justify-center"
            >
              <ArrowRight size={20} />
            </button>
          </div>
          <button className="text-sm underline text-black">View All</button>
        </div>
      </div>
      <div className="relative w-full max-w-[1320px]">
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute -left-18 top-1/2 -translate-y-1/2 w-10 h-10 border border-black rounded-md bg-white z-10 items-center justify-center"
        >
          <ArrowLeft size={20} />
        </button>
        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex w-full hide-scrollbar"
        >
          {productS.map((product) => (
            <div
              key={product.id}
              className="min-w-full snap-center bg-white rounded-xl overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-2"
            >
              <div className="flex items-center justify-center p-8 bg-white">
                <img
                  src={product.featuredImage?.url}
                  alt={product.title}
                  className="max-w-[320px] w-full h-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="bg-black text-white px-6 py-6">
                  <h3 className="text-lg font-semibold text-center mb-6">
                    {product.title}
                  </h3>
                  <div className="flex justify-between max-w-md mx-auto gap-3">
                    {["Whey Based", "Build Muscle", "Clean Ingredients"].map((label) => (
                      <div key={label} className="flex flex-col items-center gap-1">
                        <div className="bg-[#2a2a2a] rounded-full p-2">
                          <GiThreeLeaves className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-sm text-center">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-6 py-6 flex flex-col gap-6">
                  <h4 className="text-center text-lg font-semibold">Active Ingredients</h4>
                  <div className="text-center text-sm text-gray-700 max-w-md mx-auto">
                    {product.description ? (
                      <p>{product.description}</p>
                    ) : (
                      <p>No description available for this product.</p>
                    )}
                  </div>

                  <div className="flex justify-center mt-4">
                    <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition">
                      Customize This Blend
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute -right-18 top-1/2 -translate-y-1/2 w-10 h-10 border border-black rounded-md bg-white z-10 items-center justify-center"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProteidPowerServer;
