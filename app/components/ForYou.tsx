import React from "react";
import { AiFillLike } from "react-icons/ai";
import { PiPlant } from "react-icons/pi";
import { AiOutlineSchedule } from "react-icons/ai";
import { RiChatSmileLine } from "react-icons/ri";

export const ForYou: React.FC = () => {
  return (
    <div className="w-full max-w-[1520px] flex flex-col gap-[50px] mt-[70px] mb-[80px] px-4 ">
      
      <div className="max-w-full flex flex-col gap-[8px] mb-[13px]">
        <p className="text-[16px] leading-[100%] font-normal mb-[9px] ">🧐 Why Health & Fitness</p>
        <h1 className="text-[40px] leading-[100%] font-medium">
          Clean Supplements - Made For You
        </h1>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px]">
        <div className="w-full flex flex-col gap-[24px]">
          <div className="w-[40px] h-[40px] rounded-full bg-black flex items-center justify-center text-white">
            <AiFillLike size={20} />
          </div>
          <div className="flex flex-col gap-[8px]">
            <h2 className="text-[16px] font-semibold text-black leading-[100%]">
              We Make It Easy
            </h2>
            <p className="text-[14px] font-normal text-black leading-[100%] mt-[12px]">
              Personalized Solutions & Guidance Mean You Get Just What You Need. Nothing More.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-[24px]">
          <div className="w-[40px] h-[40px] rounded-full bg-black flex items-center justify-center text-white">
            <PiPlant size={20} />
          </div>
          <div className="flex flex-col gap-[8px]">
            <h2 className="text-[16px] font-semibold text-black leading-[100%]">
              Clean & Effective
            </h2>
            <p className="text-[14px] font-normal text-black leading-[100%] mt-[12px]">
              Proven Ingredients, not Artificial, Crafted By Experts For Optimal Effectiveness
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-[24px]">
          <div className="w-[40px] h-[40px] rounded-full bg-black flex items-center justify-center text-white">
            <RiChatSmileLine size={20} />
          </div>
          <div className="flex flex-col gap-[8px]">
            <h2 className="text-[16px] font-semibold text-black leading-[100%] ">
              Your Free Dietitian
            </h2>
            <p className="text-[14px] font-normal text-black leading-[100%] mt-[12px]">
              Every Gainful Subscriber Gets Free, 1:1 Access To Their Own Registered Dietitian.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-[24px]">
          <div className="w-[40px] h-[40px] rounded-full bg-black flex items-center justify-center text-white">
            <AiOutlineSchedule size={20} />
          </div>
          <div className="flex flex-col gap-[8px]">
            <h2 className="text-[16px] font-semibold text-black leading-[100%]">
              Made For You
            </h2>
            <p className="text-[14px] font-normal text-black leading-[100%] mt-[12px]">
              Performance is Personal. Personalized & Customizable Products For Your Needs, Body & Goals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForYou;
