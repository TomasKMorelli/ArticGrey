import React, { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Product } from "@shopify/hydrogen/storefront-api-types";

type Props = {
  collection: Product[];
};

export const Results: React.FC<Props> = ({ collection }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 350;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <div className="w-full min-h-screen mx-auto mt-[100px] mb-[123px] px-[40px] flex flex-col items-center bg-[#F6F6F5]">
      <div className="w-full flex items-center justify-center mt-[40px] mb-[50px] relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 w-[40px] h-[40px] border border-black flex items-center justify-center"
        >
          <ArrowLeft size={20} color="black" />
        </button>

        <div className="flex flex-col items-center space-y-[8px]">
          <p className="text-[16px] font-normal text-black">
            Trusted & Proven by Science
          </p>
          <h1 className="text-[40px] font-medium text-black text-center">
            Real People. Real Results.
          </h1>
          <a
            href="#"
            className="text-[12px] underline text-black font-normal mt-[9px]"
          >
            View All
          </a>
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 w-[40px] h-[40px] border border-black flex items-center justify-center"
        >
          <ArrowRight size={20} color="black" />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-[12px] justify-center pb-[40px] scroll-smooth"
      >
        {collection.map((product, ind) => {
          const videoUrl = product?.metafield?.value || "";
          console.log('Video URL:', videoUrl);

          return (
            <div key={product.id} className="inline-block w-[300px] flex-shrink-0">
              <div className="w-full h-[500px] rounded-[8px] overflow-hidden bg-black">
                {videoUrl ? (
                  <video
                    ref={(el) => (videoRefs.current[ind] = el)}
                    src={videoUrl}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    controls
                    preload="metadata"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-white text-center">No video available</p>
                  </div>
                )}
              </div>

              <div className="w-full bg-white p-3 flex items-start gap-3 rounded-b-[8px] mt-[15px]">
                <img
                  src={product.featuredImage?.url}
                  alt={product.title}
                  className="w-[60px] h-[60px] object-contain"
                />
                <div className="flex flex-col justify-center items-start">
                  <h5 className="text-black text-[14px] font-medium leading-tight mt-[10px]">
                    {product.title}
                  </h5>
                  <p className="text-black text-[14px] mt-[3px]">
                    ${product.priceRange.minVariantPrice.amount}
                  </p>
                </div>
                <div className="ml-auto flex items-center justify-center w-[28px] h-[28px] border mt-[12px] border-black rounded-full bg-black text-white">
                  <span className="text-[16px] leading-none">+</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
