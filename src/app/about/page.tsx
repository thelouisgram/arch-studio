"use client"

import React from 'react'
import FetchData from '../../../utils/home/FetchData';
import Hero from '@/layout/about/Hero';
import Heritage from '@/layout/about/Heritage';

const Page = () => {
    const { state } = FetchData("/data.json");
    const { data } = state;
  return (
    <div className='w-full h-full px-20'>
      <Hero data={data}/>
      <Heritage data={data} />
    </div>
  )
}

export default Page
