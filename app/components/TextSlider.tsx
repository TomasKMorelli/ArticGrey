import React from "react";
import { GiSevenPointedStar } from "react-icons/gi";

const sliderItems = [
  "High Quality Ingredients",
  "Independently Certified",
  "Expert Driven",
  "Shipped Internationally",
  "High Quality Ingredients",
  "Independently Certified",
];

export const TextSlider: React.FC = () => {
  return (
    <div
    className="
    w-[1600px]      
    h-[50px]                                      
    bg-black
   
    flex items-center
                       
    sm:mt-[200px] md:mt-[200px] lg:mt-[610px]  
  "
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {[...sliderItems, ...sliderItems].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 md:px-6 shrink-0 min-w-fit"
          >
            <GiSevenPointedStar className="text-white w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
            <p className="text-white text-[10px] sm:text-xs md:text-sm font-medium leading-none whitespace-nowrap">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
