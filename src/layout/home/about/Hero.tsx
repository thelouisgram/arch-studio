import React from "react";
import { BannerProps } from "../../../../types/home";
import About from "@/components/buttons/About";
import Image from "next/image";

const Hero: React.FC<BannerProps> = ({ data }) => {
    
  return (
    <div className="w-full h-[560px] px-20 mb-[200px]">
      <div className="w-full h-full relative pl-[180px] flex flex-col justify-center">
        <h2 className="w-[400px] font-bold text-[64px] text-white leading-none mb-10">
          Small team, big ideas
        </h2>
        <About />
        <div className="w-full absolute h-full left-0 top-0 bg-black opacity-[55%] z-[-1]" />
        {data && (
          <Image
            src={data?.HomePageBannerImgs?.desktop}
            alt="banner image"
            width={1000}
            height={1000}
            className="h-full w-full object-cover z-[-4] top-0 left-0 absolute"
            priority={true}
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
