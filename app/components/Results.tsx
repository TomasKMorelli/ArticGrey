import React, { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Product } from "@shopify/hydrogen/storefront-api-types";
import { useAside } from "./Aside";

type Props = {
  collection: (Product & {
    metafield?: {
      value: string;
      type: string;
    };
  })[];
};

export const Results: React.FC<Props> = ({ collection }) => {
  const { open } = useAside();
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) video.play().catch(() => { });
          else video.pause();
        }),
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
    <section className="w-full bg-[#F6F6F5] h-[900px] px-4 sm:px-6 mt-6  flex flex-col items-center">

      <div className="hidden sm:flex items-center justify-center gap-4 w-full mt-10 mb-10">
        <button
          onClick={() => scroll("left")}
          className="w-10 h-10 border border-black rounded-md flex items-center justify-center"
        >
          <ArrowLeft size={20} />
        </button>

        <div className="text-center flex flex-col items-center space-y-2">
          <p className="text-base text-black font-normal">
            Trusted & Proven by Science
          </p>
          <h2 className="text-4xl font-bold text-black">
            Real People. Real Results.
          </h2>
          <a href="#" className="text-xs underline text-black">
            View All
          </a>
        </div>

        <button
          onClick={() => scroll("right")}
          className="w-10 h-10 border border-black rounded-md flex items-center justify-center"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      <div className="sm:hidden flex flex-col items-center text-center mt-10 mb-10 space-y-3">
        <p className="text-base text-black">Trusted & Proven by Science</p>
        <h2 className="text-[28px] font-bold text-black whitespace-nowrap">
          Real People. Real Results.
        </h2>
        <a href="#" className="text-xs underline text-black">
          View All
        </a>
        <div className="flex gap-4 mt-2">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 border border-black rounded-md flex items-center justify-center"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 border border-black rounded-md flex items-center justify-center"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>


      <div
        ref={scrollRef}
        className="w-full overflow-x-auto flex gap-5 sm:gap-8 scroll-smooth whitespace-nowrap scrollbar-hide"
      >
        {collection.map((product, i) => {
          const variantId = product.variants?.edges?.[0]?.node?.id;
          const videoUrl = product.metafield?.value;

          return (
            <div
              key={product.id}
              className="inline-block w-[80%] sm:w-[300px] flex-shrink-0"
            >
              <div className="w-full aspect-[10/16] sm:h-[500px] bg-black rounded-lg overflow-hidden">
                {videoUrl ? (
                  <video
                    ref={(el) => (videoRefs.current[i] = el)}
                    src={videoUrl}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    controls
                    preload="metadata"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white text-center">
                    No video available
                  </div>
                )}
              </div>

              <div className="w-full bg-white mt-4 px-4 py-4 rounded-b-xl flex items-start gap-4">
                <img
                  src={product.featuredImage?.url}
                  alt={product.title}
                  className="w-14 h-14 object-contain"
                />
                <div className="flex flex-col justify-center mt-1">
                  <h5 className="text-sm font-medium text-black leading-tight">
                    {product.title}
                  </h5>
                  <p className="text-sm text-black mt-1">
                    ${product.priceRange.minVariantPrice.amount}
                  </p>
                </div>
                <div className="ml-auto mt-2 w-7 h-7 bg-black text-white rounded-full flex items-center justify-center border border-black">

                  <button onClick={() =>
                    open('preview', {
                      title: product.title,
                      image: product.featuredImage?.url || '',
                      description: product.tags?.join(', '),
                      price: product.priceRange?.minVariantPrice?.amount || '0',
                      merchandiseId: product.variants?.edges?.[0]?.node?.id || '',
                    })
                  } className="text-base">
                    +
                  </button>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Results;
