import React from "react";
import { ArrowUpRight } from "lucide-react";
import { goals } from "~/helpers/goals";

export const GoalsComponent: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center mt-[105px] px-4">
      {/* Encabezado */}
      <div className="max-w-[1600px] w-full flex flex-col items-center text-center gap-2 px-2">
        <h4 className="text-[14px] sm:text-[16px] leading-tight font-bold text-black">
          COMFORTABLY UNCOMFORTABLE
        </h4>
        <h2 className="text-[28px] font-bold sm:text-[32px] md:text-[40px] leading-tight mb-[16px] text-black">
          Start with your Goals
        </h2>
        <p className="text-[14px] sm:text-[16px] font-light leading-[24px] tracking-normal text-black">
          We cannot become what we want to be by
        </p>
        <p className="text-[14px] sm:text-[16px] font-light leading-[24px] tracking-normal text-black">
          remaining what we are.
        </p>
      </div>

      {/* Tarjetas */}
      <div
        className="
          max-w-[1520px] w-full mt-[59px] 
          flex flex-wrap justify-center gap-[20px]
          lg:justify-between
          xl:flex-nowrap xl:overflow-x-hidden
        "
      >
        {goals.map((goal, idx) => (
          <div
            key={idx}
            className="w-full max-w-[288px] h-[483px] flex flex-col items-center gap-[24px] group"
          >
            <img
              src={`/assets/${goal.img}`}
              alt={`goal-${idx}`}
              className="w-[288px] h-[392px] rounded-[8px] object-cover"
            />
            <div className="flex flex-col items-start justify-start w-full px-[8px]">
              <div className="flex justify-between items-center w-full">
                <h3 className="text-black text-[14px] font-bold">
                  {goal.title}
                </h3>
                <div className="w-[24px] h-[24px] flex items-center justify-center rounded-full border border-black group-hover:bg-black transition-colors">
                  <ArrowUpRight
                    size={14}
                    className="text-black group-hover:text-white transition"
                  />
                </div>
              </div>
              <p className="text-[14px] font-normal text-black mt-[6px]">
                {goal.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalsComponent;
