"use client";
import React, { useState, useEffect } from "react";
import FetchData from "../../../utils/home/FetchData";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

const Page = () => {
  const { state } = FetchData("/data.json");
  const { data } = state;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setTimeout(() => setIsLoading(false), 800);
    }
  }, [data]);

  const portfolio = data?.portfolioData;

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
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-7 px-[30px] ss:px-16 md:px-20 mb-[128px] relative">
            {portfolio?.map((item: any, index: number) => {
              return (
                <div
                  key={item.id}
                  className="relative w-full h-full md:aspect-[452/724]"
                >
                  <Image
                    src={item.image.desktop}
                    alt="portfolio"
                    width={1000}
                    height={1000}
                    className="hidden md:flex"
                  />
                  <Image
                    src={item.image.tablet}
                    alt="portfolio"
                    width={1000}
                    height={1000}
                    className="md:hidden ss:flex hidden"
                  />
                  <Image
                    src={item.image.mobile}
                    alt="portfolio"
                    width={1000}
                    height={1000}
                    className="ss:hidden flex"
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
            <div className="hidden ss:flex text-[#EEEFF4] absolute top-[132px] text-[18px] left-[-132px] rotate-90 leading-none tracking-[1.2em]">
              PORTFOLIO
            </div>
          </div>
          <Footer />
        </section>
      )}
    </div>
  );
};

export default Page;
