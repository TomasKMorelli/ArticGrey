import React from "react";


export const Hero: React.FC = () => {
  return (
    <div className=" max-w-[1600px] max-h-[920px] ">
      <video
        src="/assets/video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 max-w-[1600px]  h-full object-cover"
        aria-hidden="true"
      />

      <div
        className="
    relative z-20
    w-full max-w-[840px]
    h-auto max-h-[263.35px]
    mt-20 md:mt-[300px] lg:mt-[599.15px]
    ml-0 sm:ml-[20px] md:ml-[40px]
    flex flex-col gap-6 sm:gap-10 md:gap-14 lg:gap-20
  "
      >
        <div className="w-full max-w-[840px] h-auto max-h-[166px] mx-auto">
          <h1
            className="
        text-white
        font-semibold
        text-[70px]
        leading-[100%]
        tracking-[0%]
        sm:text-[50px] md:text-[60px] lg:text-[70px]
        xl:text-[70px]
        mb-6 sm:mb-8 md:mb-10
      "
          >
            Great things never came
            <br />
            from comfort zones.
          </h1>

          <button
            className="
        w-full sm:w-[160px]
        h-[50px]
        rounded-[8px]
        bg-white
        text-zinc-900
        text-sm sm:text-base
        font-medium
        px-[16px] py-[10px]
        flex items-center justify-center
        sm:flex-row flex-col
        hover:bg-gray-100
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-gray-500
        transition-colors
      "
            aria-label="Shop Now"
          >
            Shop Now
          </button>
        </div>


      </div>
    </div>
  );
};

export default Hero;
