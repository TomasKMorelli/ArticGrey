import React from "react";

export const Generation: React.FC = () => {
  return (
    <div className="relative w-full-[1700px] h-[750px] overflow-hidden mt-[39px]  mb-[30px]">
      <div className="relative max-w-[1520px] w-full h-full mx-auto px-4 sm:px-8">
        
        <img
          src="assets/hydr.png"
          alt="Background"
          className="absolute inset-0 w-[1520px] h-full object-cover z-0"
        />

      
        <div className="relative z-10 flex items-center h-full w-full">
          <div className="text-white text-left space-y-[20px] max-w-xl sm:ml-[40px] md:ml-[80px]">
            <h1 className="text-[36px] sm:text-[44px] md:text-[50px] font-semibold leading-[100%]">
              The Next Generation is Here
            </h1>
            <p className="text-[16px] max-w-[480px] font-normal leading-[100%]">
              Innovative Engineering. Intelligent Design. Meet The Plunge All-I.
            </p>

            <div className="flex flex-wrap gap-[12px] mt-[45px]">
              <button className="w-[190px] h-[50px] border font-medium text-[16px] text-black bg-white rounded-[8px] p-[10px]">
                Take The Plunge
              </button>
              <button className="w-[190px] h-[50px] border border-white text-white font-medium text-[16px] bg-transparent rounded-[8px] p-[10px]">
                Dive Deeper
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generation;
