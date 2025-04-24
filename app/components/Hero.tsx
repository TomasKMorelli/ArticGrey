import React from "react";

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[920px] overflow-hidden">
      <video
        src="/assets/video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        aria-hidden="true"
      />

 
      <div className="relative w-full h-full z-10 flex items-start">

        <div className="hidden lg:flex absolute top-[599.15px] left-[40px] w-full max-w-[840px] h-[263.35px] flex-col gap-[40px]">
          <h1 className="text-white text-[70px] font-bold leading-[100%] font-Rubik">
            Great things never came <br /> from comfort zones.
          </h1>
          <button className="w-[160px] h-[50px] rounded-[8px] bg-white text-black text-sm font-medium hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>

  
        <div className="lg:hidden w-full px-6 mt-[30vh] max-w-[840px] mx-auto flex flex-col gap-6">
          <h1 className="text-white text-[40px] sm:text-[48px] font-bold leading-[110%] font-Rubik">
            Great things never came <br /> from comfort zones.
          </h1>
          <button className="w-full sm:w-[160px] h-[50px] rounded-[8px] bg-white text-black text-sm font-medium hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>)
};

export default Hero;
