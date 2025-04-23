import React from "react";
import { FaStar } from "react-icons/fa";

export const FeaturedBanner: React.FC = () => {
  return (
    <div className="max-w-[1600px] border-t border-[#D9D9D9] bg-[#F6F6F5]">
      <div className="max-w-[1600px] h-auto mx-auto flex flex-col md:flex-row items-center justify-between px-5 md:px-[40px] py-6 gap-6">
        
      
        <div className="flex flex-col md:flex-row items-start md:items-center gap-[12px] w-full md:w-auto">
          <button className="w-[198px] h-[38px] rounded-[8px] bg-[#E0E0E0] border border-black text-sm font-semibold text-[#1B1F23]">
            #1 Doctor Recommended
          </button>
          <div className="flex items-center gap-[1px] flex-wrap">
            {[...Array(5)].map((_, idx) => (
              <FaStar key={idx} className="text-[#F5BD41]" />
            ))}
            <p className="text-[16px] h-[21px] ml-[12px] text-[#1B1F23] whitespace-nowrap">
              12,000+ 5-star Reviews
            </p>
          </div>
        </div>

 
        <div className="hidden md:block h-[70px] w-[1px] bg-gray-300" />
        <div className="block md:hidden max-w-[1600px]h-[1px] bg-gray-300" />

        <div className="flex flex-wrap justify-center md:justify-start items-center gap-[8px] w-full md:w-auto">
          {[
            "rollingreal.png",
            "men.png",
            "laWeekly.png",
            "logoHerb.png",
            "newyork.png",
            "bbcreal.png",
          ].map((img, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm w-[120px] h-[40px] flex items-center justify-center"
            >
              <img
                src={`/assets/${img}`}
                alt={`logo-${idx}`}
                className="object-contain max-h-[30px] max-w-[120px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBanner;
