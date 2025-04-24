import React from "react";
import { AiFillLike } from "react-icons/ai";
import { PiPlant } from "react-icons/pi";
import { AiOutlineSchedule } from "react-icons/ai";
import { RiChatSmileLine } from "react-icons/ri";

const features = [
  {
    icon: <AiFillLike size={20} />,
    title: "We Make It Easy",
    description:
      "Personalized Solutions & Guidance Mean You Get Just What You Need. Nothing More.",
  },
  {
    icon: <PiPlant size={20} />,
    title: "Clean & Effective",
    description:
      "Proven Ingredients, not Artificial, Crafted By Experts For Optimal Effectiveness.",
  },
  {
    icon: <RiChatSmileLine size={20} />,
    title: "Your Free Dietitian",
    description:
      "Every Gainful Subscriber Gets Free, 1:1 Access To Their Own Registered Dietitian.",
  },
  {
    icon: <AiOutlineSchedule size={20} />,
    title: "Made For You",
    description:
      "Performance is Personal. Personalized & Customizable Products For Your Needs, Body & Goals.",
  },
];

export const ForYou: React.FC = () => {
  return (
    <section className="w-full bg-white  px-4 sm:px-6 xl:px-10 py-16">
      <div className="max-w-[1520px] mx-auto flex flex-col gap-12">
       
        <div className="max-w-[419px] flex flex-col gap-2">
          <p className="text-base text-black">🤓 Why Health & Fitness</p>
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold leading-tight text-black">
            Clean Supplements –<br className="sm:hidden" />
            Made For You
          </h2>
        </div>

 
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col gap-6">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                {item.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base sm:text-lg font-semibold text-black leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-black leading-snug">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForYou;
