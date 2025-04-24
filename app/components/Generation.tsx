import React from "react";

export const Generation: React.FC = () => {
  return (
    <div className="w-full px-4 py-13 flex justify-center">
      <div className="relative w-full max-w-[1620px] h-[1000px] sm:h-[750px] rounded-xl overflow-hidden">
        <img
          src="assets/hydr.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-[center_5%] sm:object-center"
        />

        <div className="relative z-10 flex items-start sm:items-center h-full px-6 sm:px-12 pt-[100px] sm:pt-0">
          <div className="text-white space-y-5 max-w-xl mx-auto sm:mx-0 text-center sm:text-left">
            <h1 className="text-[32px] sm:text-[40px] md:text-[50px] font-semibold leading-[110%]">
              The Next Generation is Here
            </h1>
            <p className="text-[15px] sm:text-[16px] font-normal leading-[130%]">
              Innovative Engineering. Intelligent Design. Meet The Plunge All-I.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-4 gap-3 mt-6">
              <button className="w-full sm:w-[190px] h-[50px] border font-medium text-[16px] text-black bg-white rounded-[8px] px-6">
                Take The Plunge
              </button>
              <button className="w-full sm:w-[190px] h-[50px] border border-white text-white font-medium text-[16px] bg-transparent rounded-[8px] px-6">
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
