"use client"

import React from 'react'
import FetchData from '../../../utils/home/FetchData';
import Hero from '@/layout/about/Hero';
import Heritage from '@/layout/about/Heritage';
import Leaders from '@/layout/about/Leaders';

const Page = () => {
    const { state } = FetchData("/data.json");
    const { data } = state;
  return (
    <div className="w-full h-full px-20 relative">
      <Hero data={data} />
      <Heritage data={data} />
      <Leaders data={data} />
      <div className="text-[#EEEFF4] absolute top-[118px] text-[18px] left-[-116px] rotate-90 leading-none tracking-[1.2em]">
        ABOUT US
      </div>
    </div>
  );
}

export default Page
