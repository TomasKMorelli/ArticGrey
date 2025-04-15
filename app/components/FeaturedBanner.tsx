import React from "react";
import { FaStar } from "react-icons/fa";

export const FeaturedBanner: React.FC = () => {
  return (

    <div className="w-full bg-[#F6F6F5] mt-[3px]">
    
      <div className="flex flex-col md:flex-row items-start md:items-center px-6 md:px-[19px] py-[24px] gap-6 md:gap-8 w-full max-w-[1600px] mx-auto">
    
        <div className="flex flex-col gap-[13px]">
          <button className="w-[198px] h-[38px] gap-[10px] rounded-[8px] bg-[#E0E0E0] border-[1px] border-black text-sm font-semibold text-[#1B1F23]">
            #1 Doctor Recommended
          </button>
          <div className="flex items-center gap-[1px] flex-wrap">
            <FaStar className="text-[#F5BD41]" />
            <FaStar className="text-[#F5BD41]" />
            <FaStar className="text-[#F5BD41]" />
            <FaStar className="text-[#F5BD41]" />
            <FaStar className="text-[#F5BD41]" />
            <p className="text-[16px] h-[21px] ml-[12px] w-auto text-[#1B1F23]">
              12,000+ 5-star Reviews
            </p>
          </div>
        </div>

    
        <div className="hidden md:flex h-[70px] w-[1px] ml-[120px] bg-gray-300 self-center" />

  
        <div className="block md:hidden h-[1px] w-full bg-gray-300" />

 
        <div className="flex flex-wrap gap-2 md:gap-[8px] ml-[52px] justify-start md:justify-end">
          {[
            "rollingreal.png",
            "men.png",
            "laWeekly.png",
            "logoHerb.png",
            "newyork.png",
            "bbcreal.png",
            "rollingreal.png",
            "men.png",
          ].map((img, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm w-[120px] h-[40px] flex items-center justify-center"
            >
              <img
                src={`/assets/${img}`}
                alt={`img-${idx}`}
                className="object-contain max-h-[30px] max-w-[80px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBanner