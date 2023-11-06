"use client";

import React from "react";
import FetchData from "../../utils/home/FetchData";
import Banner from "@/layout/home/banner/Banner";
import Welcome from "@/layout/home/welcome/Welcome";
import Hero from "@/layout/home/about/Hero";
import Featured from "@/layout/home/featured/Featured";

const Page = () => {
  const { state } = FetchData("/data.json");
  const { data } = state;

  return (
    <section className="w-full h-full">
      <Banner data={data} />
      <Welcome data={data}/>
      <Hero  data={data}/>
      <Featured data={data} />
    </section>
  );
};

export default Page;
