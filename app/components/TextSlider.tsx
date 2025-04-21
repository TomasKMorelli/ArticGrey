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
    <div className="w-full relative overflow-hidden bg-black py-4  xl:mt-[300px]">
      <div className="flex w-max animate-[var(--animation-marquee)]">
        {[...sliderItems, ...sliderItems].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-6 shrink-0"
          >
            <GiSevenPointedStar className="text-white w-4 h-4" />
            <p className="text-white text-sm font-medium leading-none whitespace-nowrap">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextSlider;
