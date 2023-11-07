import React from "react";
import { DataProps } from "../../../../types/home";
import SeeAll from "@/components/buttons/SeeAll";
import Image from "next/image";

const Featured: React.FC<DataProps> = ({ data }) => {
  const portfolio = data?.portfolioData;
  const selectedProjects = portfolio?.slice(3, 6);
  return (
    <div className="h-full w-full px-20 mb-[200px]">
      <div className="w-full flex justify-between items-center mb-[70px]">
        <h3 className="text-[64px] font-semibold leading-none">Featured</h3>
        <SeeAll />
      </div>
      <div className="w-full h-full flex gap-6">
        {selectedProjects?.map((item: any, index: number) => {
          return (
            <div key={item.id} className="relative w-full h-full">
              <Image
                src={item?.image.desktop}
                alt="portfolio"
                width={1000}
                height={1000}
              />
              <h2 className="font-bold text-[200px] absolute right-[-15px] top-[10px] leading-none text-white opacity-[50%]">
                {index + 1}
              </h2>
              <div className="absolute p-[30px] bottom-0 left-0 z-[4]">
                <h4 className="text-white font-semibold text-[22px]">
                  {item.title}
                </h4>
                <p className="text-white">View All Projects</p>
              </div>
              <div className="w-full absolute h-full top-0 bg-black opacity-[25%] z-[3]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
