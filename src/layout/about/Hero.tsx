import React from "react";
import { DataProps } from "../../../types/home";
import Image from "next/image";

const Hero: React.FC<DataProps> = ({ data }) => {
  const hero = data?.aboutData?.hero;
  return (
    <div className="w-full h-[725px] mb-[164px] relative">
      <div className="w-full h-full flex flex-col items-end justify-end">
        <h1 className="text-[230px] text-[#EEEFF4] font-bold leading-none z-[10] capitalize mb-[-125px]">
          {hero?.headingLarge}
        </h1>
        <div className="w-[600px] h-[500px] pl-[185px] flex flex-col justify-end z-[9] bg-white">
          <div className="w-10 h-[2px] bg-grey mb-10" />
          <h3 className="text-[64px] leading-none mb-[40px] font-semibold">
            {hero?.heading}
          </h3>
          <p className="text-[22px] text-darkGrey leading-tight">
            {hero?.paragraph}
          </p>
        </div>
      </div>
      <div className="h-full w-[63%] xl:w-[70%] absolute z-[-3] top-0 left-0">
        <div className="w-full absolute h-full top-0 bg-black opacity-[55%] z-[3]" />
        <Image
          src={hero?.image.desktop}
          alt="hero image"
          width={1000}
          height={1000}
          className="w-full h-full object-cover z-[-3]"
        />
      </div>
    </div>
  );
};

export default Hero;
