"use client"

import React from 'react'
import Hero from '@/layout/contact/Hero';
import FetchData from '../../../utils/home/FetchData';
import Details from '@/layout/contact/Details';

const Page = () => {
    const { state } = FetchData("/data.json");
    const { data } = state;
  return (
    <div className="w-full h-full px-20 relative">
      <Hero data={data} />
      <Details data={data} />
      <div className="text-[#EEEFF4] absolute top-[105px] text-[18px] left-[-104px] rotate-90 leading-none tracking-[1.2em]">
        CONTACT
      </div>
    </div>
  );
}

export default Page
