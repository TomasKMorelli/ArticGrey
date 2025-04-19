import React from "react";
import { Link } from "@remix-run/react";

const Articles: React.FC = () => {
  return (
    <div className="w-full max-w-[1530px] mx-auto mt-[45px] px-4 py-6 space-y-[40px]">
  
      <div className="flex justify-between items-start">
        <div>
          <p className="font-normal text-[16px] leading-[100%] mb-1">✍️ Blogs</p>
          <h1 className="text-[40px] font-medium leading-[100%]">Latest Articles</h1>
        </div>
        <Link
          to=""
          className="text-[14px] underline font-normal hover:opacity-80 transition"
        >
          View All
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-[20px]">
       
        <div className="w-full lg:w-[880px] h-[450px]  relative overflow-hidden rounded-md">
          <img
            src="/assets/bike.png"
            alt="Main Article"
           className="w-full h-full object-cover object-top"
          />
          <div className="absolute bottom-6 left-6 text-white gap-[32px]">
            <p className="text-sm font-medium">Balanced Diet</p>
            <h2 className="text-2xl font-semibold mt-1 leading-tight max-w-[90%]">
              Foundational Supplements: Build a Better You
            </h2>
            <p className="text-sm font-light mt-2">
              By Emily Thompson <span className="mx-2">|</span> August 31, 2023
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-[20px] w-full lg:w-[700px]">
        
          <div className="flex gap-4 h-[215px]">
            <img
              src="/assets/gym2.png"
              alt="Article 1"
              className="w-[220px] h-full object-cover rounded-md"
            />
            <div className="flex flex-col justify-center gap-[32px]">
              <p className="text-sm text-gray-600 font-medium">Balanced Diet</p>
              <h3 className="text-[16px] font-semibold leading-tight mt-1">
                Taming the Fire Within: Everything You Need to Know About Inflammation
              </h3>
              <p className="text-sm text-gray-500 font-light mt-2">
                By Emily Thompson <span className="mx-2">|</span> August 31, 2023
              </p>
            </div>
          </div>

        
          <div className="flex gap-4 h-[215px]">
            <img
              src="/assets/gym3.png"
              alt="Article 2"
              className="w-[220px] h-full object-cover rounded-md"
            />
            <div className="flex flex-col justify-center gap-[32px]">
              <p className="text-sm text-gray-600 font-medium">Balanced Diet</p>
              <h3 className="text-[16px] font-semibold leading-tight mt-1">
                Optimize Your Sleep with These 15 Strategies
              </h3>
              <p className="text-sm text-gray-500 font-light mt-2">
                By Emily Thompson <span className="mx-2">|</span> August 31, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
