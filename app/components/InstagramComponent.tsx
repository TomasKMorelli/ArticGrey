import React from "react";
import { photos1, photos2 } from "~/helpers/photos";

export const InstagramComponent: React.FC = () => {
  return (
    <div className="w-full py-12 mb-40 px-4 sm:px-6 lg:px-8">
     <div className="w-full max-w-[1900px]  2xl:max-w-[1620px] mx-auto flex flex-col gap-[12px]">


        <div className="hidden md:grid md:grid-cols-[430px_repeat(5,245px)] gap-[10px]">

          <div className="h-[245px] bg-[#F6F6F5] border border-gray-200 flex flex-col items-center justify-center gap-2 rounded-[8px] p-4 text-center">
            <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-semibold shadow-md">
              Logo
            </div>
            <h4 className="text-[18px] font-bold">@uncmfrt.com</h4>
            <p className="text-sm font-medium">Follow us on Instagram</p>
          </div>

          {photos1.map((photo, idx) => (
            <div
              key={idx}
              className="w-[245px] h-[245px] overflow-hidden rounded-[8px] transition-transform duration-300 ease-in-out hover:scale-105 will-change-transform"
            >
              <img
                src={photo.img}
                alt={`photo1-${idx}`}
                className="w-full h-full object-cover rounded-[8px]"
              />
            </div>
          ))}
        </div>


        <div className="hidden md:grid md:grid-cols-[repeat(6,205px)] gap-[70px]">
          {photos2.map((photo, idx) => (
            <div
              key={idx}
              className="w-[245px] h-[245px] overflow-hidden rounded-[8px] transition-transform duration-300 ease-in-out hover:scale-105 will-change-transform"
            >
              <img
                src={photo.img}
                alt={`photo2-${idx}`}
                className="w-full h-full object-cover rounded-[8px]"
              />
            </div>
          ))}
        </div>


        <div className="grid grid-cols-2 gap-[10px] md:hidden">
          <div className="col-span-2 h-[245px] bg-[#F6F6F5] border border-gray-200 flex flex-col items-center justify-center gap-2 rounded-[8px] p-4 text-center">
            <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-semibold shadow-md">
              Logo
            </div>
            <h4 className="text-[18px] font-bold">@uncmfrt.com</h4>
            <p className="text-sm font-medium">Follow us on Instagram</p>
          </div>

          {[...photos1, ...photos2].map((photo, idx) => (
            <div
              key={idx}
              className="w-full h-[245px] overflow-hidden rounded-[8px] transition-transform duration-300 ease-in-out hover:scale-105 will-change-transform"
            >
              <img
                src={photo.img}
                alt={`photo-${idx}`}
                className="w-full h-full object-cover rounded-[8px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramComponent;