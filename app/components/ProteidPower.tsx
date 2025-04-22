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
    <div className="relative w-full bg-[#f6f5f3] px-4 py-[100px] flex flex-col items-center">
   
      <div className="text-center mb-12">
        <p className="text-sm text-gray-700 mb-1">Simple & Effective Ingredients</p>
        <h2 className="text-3xl font-bold">Customized Protein Powder</h2>
      </div>

     
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-[40px] h-[40px] border border-black flex items-center justify-center bg-white z-10 rounded-md"
      >
        <ArrowLeft size={20} />
      </button>

      <div ref={scrollRef} className="overflow-hidden w-full max-w-6xl">
        <div className="flex snap-x snap-mandatory scroll-smooth w-full">
          {productS.map((product) => (
            <div
              key={product.id}
              className="min-w-full snap-center bg-white rounded-xl overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-2"
            >
              
              <div className="flex items-center justify-center p-8 bg-white">
                <img
                  src={product.featuredImage?.url}
                  alt={product.title}
                  className="w-full max-w-[320px] h-auto object-contain"
                />
              </div>

              
              <div className="flex flex-col">
               
                <div className="bg-black text-white px-8 py-6">
                  <h3 className="text-lg font-semibold text-center mb-6">{product.title}</h3>
                  <div className="flex justify-between max-w-md mx-auto">
                    {["Whey Based", "Build Muscle", "Clean Ingredients"].map((label) => (
                      <div key={label} className="flex flex-col items-center gap-1">
                        <div className="bg-[#2a2a2a] rounded-full p-2">
                          <GiThreeLeaves className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-sm">{label}</p>
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
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-[40px] h-[40px] border border-black flex items-center justify-center bg-white z-10 rounded-md"
      >
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default ProteidPowerServer;
