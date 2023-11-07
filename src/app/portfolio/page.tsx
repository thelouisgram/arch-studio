"use client"
import React from 'react'
import FetchData from '../../../utils/home/FetchData';
import Image from 'next/image';

const Page = () => {
    const { state } = FetchData("/data.json");
    const { data } = state;
    const portfolio = data?.portfolioData;
  return (
    <div className="w-full h-full grid grid-cols-3 gap-7 px-20 mb-[128px] relative">
      {portfolio?.map((item: any, index: number) => {
        return (
          <div key={item.id} className="relative w-full h-full">
            <Image
              src={item.image.desktop}
              alt="portfolio"
              width={1000}
              height={1000}
            />
            <div className="absolute p-[30px] bottom-0 left-0 z-[4]">
              <h4 className="text-white font-semibold text-[22px]">
                {item.title}
              </h4>
              <p className="text-white">View All Projects</p>
            </div>
            <div className="w-full absolute h-full top-0 bg-black opacity-[20%] z-[3]" />
          </div>
        );
      })}
      <div className="text-[#EEEFF4] absolute top-[132px] text-[18px] left-[-132px] rotate-90 leading-none tracking-[1.2em]">
        PORTFOLIO
      </div>
    </div>
  );
}

export default Page
