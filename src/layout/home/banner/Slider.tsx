import React from "react";
import { SliderProps } from "../../../../types/home";
import Image from "next/image";
import Portfolio from "@/components/buttons/Portfolio";

const Slider: React.FC<SliderProps> = ({ data, page }) => {
  const slider = data?.slider?.[page];
  return (
    <div className="relative w-full h-full">
      <div className="h-full text-white pl-[180px] flex justify-center z-[10] flex-col">
        <h1 className="font-bold leading-none w-[450px] text-[84px] z-[10] mb-[20px]">
          {slider?.title}
        </h1>
        <p className="z-[10] mb-[30px] w-[450px] text-[22px] leading-tight">
          {slider?.content}
        </p>
        <Portfolio />
      </div>
      <div className="w-full h-full absolute top-0 left-0">
        {slider && (
          <Image
            src={slider?.images.desktop}
            alt="banner image"
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
            priority={true}
          />
        )}
      </div>
      <div className="w-full absolute h-full top-0 bg-black opacity-[55%] z-[3]" />
    </div>
  );
};

export default Slider;
