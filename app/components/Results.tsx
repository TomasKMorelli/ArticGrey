import React from "react";
import { videos } from "~/helpers/videos";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Results: React.FC = () => {
  return (
    <div className="w-full h-[923px] mx-auto px-[40px] flex flex-col items-center bg-[#F6F6F5]">
      
    
      <div className="w-full flex items-center justify-center mt-[40px] mb-[50px] relative">
      
        <button className="absolute left-74 w-[40px] h-[40px] border border-black  flex items-center justify-center">
          <ArrowLeft size={20} color="black" />
        </button>
        <div className="flex flex-col items-center space-y-[8px]">
          <p className="text-[16px] font-normal leading-[100%] text-black">
            Trusted & Proven by Science
          </p>
          <h1 className="text-[40px] font-medium leading-[100%] text-black">
            Real People. Real Results.
          </h1>
          <a
            href="#"
            className="text-[12px] underline text-black font-normal mt-[9px]"
          >
            View All
          </a>
        </div>        
        <button className="absolute right-74 w-[40px] h-[40px] border border-black  flex items-center justify-center">
          <ArrowRight size={20} color="black" />
        </button>
      </div>

      <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-[12px] justify-center">
        {videos.map((vid, ind) => (
          <div
            key={ind}
            className="relative inline-block w-[300px] h-[500px] rounded-[8px] overflow-hidden"
          >
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
        ))}
      </div>
    </div>
  );
};