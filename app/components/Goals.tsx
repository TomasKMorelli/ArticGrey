import React from "react";
import { ArrowUpRight } from "lucide-react";
import { goals } from "~/helpers/goals";

export const GoalsComponent: React.FC = () => {
  return (
    <div className="w-[1600px] flex flex-col items-center mt-[105px] px-4">
      <div className=" max-w-[1600px] h-[138px] gap-[8px] text-black items-center flex flex-col justify-center content-center">
        <h4 className="text-black text-[16px] font-light leading-tight">
          COMFORTABLY UNCOMFORTABLE
        </h4>
        <h2 className="text-black text-[40px] font-medium leading-tight mb-[23px] text-center">
          Start with your Goals
        </h2>
        <p className="font-light text-16 leading-[24px] tracking-normal text-center">
          We cannot become what we want to be by
        </p>
        <p className="font-light text-16 leading-[24px] tracking-normal text-center">
          remaining what we are.
        </p>
      </div>

      <div className=" max-w-[1600px] mt-[59px]">
        <div className="flex gap-[13px] justify-center items-start overflow-x-auto px-1 snap-x snap-mandatory">
          {goals.map((goal, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center max-w-[1600px] justify-start min-w-[288px] gap-[20px] group overflow-hidden snap-start"
            >
              <img
                src={`/assets/${goal.img}`}
                alt={`img-${idx}`}
                className="w-[288px] h-[392px] rounded-[8px] object-cover transition-transform duration-300 group-hover:scale-104"
              />
              <div className="flex flex-col items-start justify-start mt-[12px] px-[8px] w-full">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-black text-[14px] font-semibold">
                    {goal.title}
                  </h3>
                  <ArrowUpRight
                    size={23}
                    className="text-gray-400 transition-all duration-300 transform rotate-0 group-hover:rotate-46 group-hover:text-black border rounded-4xl"
                  />
                </div>
                <p className="text-[14px] font-normal text-black mt-[6px]">
                  {goal.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoalsComponent;
