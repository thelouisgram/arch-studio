"use client"

import React from 'react'
import Hero from '@/layout/contact/Hero';
import FetchData from '../../../utils/home/FetchData';

const Page = () => {
    const { state } = FetchData("/data.json");
    const { data } = state;
  return (
    <div className='w-full h-full px-20'>
      <Hero data={data} />
    </div>
  );
}

export default Page
