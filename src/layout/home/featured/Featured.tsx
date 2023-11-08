import React from "react";
import { DataProps } from "../../../../types/home";
import SeeAll from "@/components/buttons/SeeAll";
import Image from "next/image";

const Featured: React.FC<DataProps> = ({ data }) => {
  const portfolio = data?.portfolioData;
  const selectedProjects = portfolio?.slice(3, 6);
  return (
    <div className="h-full w-full px-[30px] ss:px-20 mb-[200px]">
      <div className="w-full flex justify-between items-center mb-[70px]">
        <h3 className="text-[40px] ss:text-[64px] w-full text-center ss:text-left font-semibold leading-none">Featured</h3>
        <div className="hidden ss:flex">
          <SeeAll />
        </div>
      </div>
      <div className="w-full h-full flex flex-col md:flex-row gap-6">
        {selectedProjects?.map((item: any, index: number) => {
          return (
            <div key={item.id} className="relative w-full h-full">
              <Image
                src={item.image.desktop}
                alt="portfolio"
                width={350}
                height={560}
                className="hidden md:flex object-cover w-full h-auto"
              />
              <Image
                src={item.image.tablet}
                alt="portfolio"
                width={573}
                height={240}
                className="md:hidden ss:flex hidden object-cover w-full h-auto"
              />
              <Image
                src={item.image.mobile}
                alt="portfolio"
                width={311}
                height={240}
                className="ss:hidden flex object-cover w-full h-auto"
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
        <div className="flex ss:hidden w-full justify-center">
          <SeeAll />
        </div>
      </div>
    </div>
  );
};

export default Featured;
