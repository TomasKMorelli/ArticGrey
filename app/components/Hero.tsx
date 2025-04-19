import React from "react";
import { FeaturedBanner } from "./FeaturedBanner";
import TextSlider from "./TextSlider";


export const Hero: React.FC = () => {
  return (
    <div className=" w-full-[1600px] h-full-[920px] ">
      <video
        src="/assets/video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      <div className=" relative z-30 w-[840px] h-[208.35px] flex flex-col items-start px-8 mt-[450px] ml-[8px] gap-[30px]">
        <h1 className=" w-[840px] text-5xl h-[90px] gap-[8px] text-white">
          Great things never came
          <br />
          from comfort zones.
        </h1>

        <button
          className="gap-[10px]  text-base font-medium bg-white rounded-[8px] w-[160px] sm:w-[200px] p-[10px] h-[50px] text-zinc-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
          aria-label="Shop Now"
        >
          Shop Now
        </button>

      </div>

      <div className="w-full-[1600px]">

      <TextSlider />
      <FeaturedBanner />
      </div>

    


    </div>
  );
};

export default Hero;
