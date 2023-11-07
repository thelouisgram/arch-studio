"use client";

import React, { useState, useEffect } from "react";
import FetchData from "../../../utils/home/FetchData";
import Hero from "@/layout/about/Hero";
import Heritage from "@/layout/about/Heritage";
import Leaders from "@/layout/about/Leaders";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Page = () => {
  const { state } = FetchData("/data.json");
  const { data } = state;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setTimeout(() => setIsLoading(false), 800);
    }
  }, [data]);

  return (
    <div className="h-full w-full relative">
      {isLoading && <Loader />}

      {!isLoading && data && (
        <section
          className={` ${
            !isLoading && data ? "display-block" : "display-none"
          } font-Spartan px-0 ss:px-10 md:px-16 md:container w-full h-full text-dark relative`}
        >
          <Header />
          <div className="w-full h-full px-[30px] ss:px-16 md:px-20 relative">
            <Hero data={data} />
            <Heritage data={data} />
            <Leaders data={data} />
            <div className="hidden ss:flex text-[#EEEFF4] absolute top-[118px] text-[18px] left-[-116px] rotate-90 leading-none tracking-[1.2em]">
              ABOUT US
            </div>
          </div>
          <Footer />
        </section>
      )}
    </div>
  );
};

export default Page;
