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
    <div className=" w-full-[1600px] relative overflow-hidden bg-black py-4 mt-[111px] h-[50px]">
      <div className="flex animate-[var(--animation-marquee)] w-[300%]">
        {[...sliderItems, ...sliderItems].map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-[4px] px-[24px]"
          >
            <GiSevenPointedStar className="text-white w-[16px] h-[16px] text-[16px]" />
            <p className="text-white size-[14px] w-[259px] h-[17px] font-medium leading-[100%]">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextSlider;