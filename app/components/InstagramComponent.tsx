import React from "react";
import { photos1, photos2 } from "~/helpers/photos";

export const InstagramComponent: React.FC = () => {
    return (
        <div className="w-[1600px]   justify-center content-center py-10 items-center flex flex-col gap-3">
            <div className="flex flex-wrap gap-2">

                <div className="min-w-[240px] w-[500px] h-[285px] bg-[#F6F6F5] flex flex-col items-center justify-center gap-4 p-4">
                    <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center text-sm font-semibold">
                        Logo
                    </div>
                    <h4 className="text-[20px] leading-[100%] font-normal">@uncmfrt.com</h4>
                    <button className="border border-black rounded-[8px] px-6 py-3 bg-neutral-100 text-sm font-medium">
                        Follow Us on Instagram
                    </button>
                </div>

                {photos1.map((photo, idx) => (
                    <div key={idx} className="w-[245px] h-[285px]">
                        <img
                            src={photo.img}
                            alt={`photo1-${idx}`}
                            className="w-[1600px] h-full object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>


            <div className="flex flex-wrap gap-2">
                {photos2.map((photo, idx) => (
                    <div key={idx} className="w-[245px] h-[285px]">
                        <img
                            src={photo.img}
                            alt={`photo2-${idx}`}
                            className="w-full h-[305px] object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstagramComponent;