"use client";

import React, { useState, useEffect } from "react";
import Hero from "@/layout/contact/Hero";
import FetchData from "../../../utils/home/FetchData";
import Details from "@/layout/contact/Details";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Connect from "@/layout/contact/Connect";
import { scrollToTop } from "../../../utils/shared";
import Image from "next/image";

const Page = () => {
  const { state } = FetchData("/data.json");
  const { data } = state;
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (data) {
      setTimeout(() => setIsLoading(false), 800);
    }
  }, [data]);

  useEffect(() => {
    const checkScrollPosition = () => {
      if (window.scrollY !== 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <div className="h-full w-full relative">
      <Loader isLoading={isLoading} />
      {!isLoading && data && (
        <section
          className={` ${
            !isLoading && data ? "display-block" : "display-none"
          } font-Spartan px-0 ss:px-10 md:px-16 md:container w-full h-full text-dark relative`}
        >
          <Header />
          <div className="w-full h-full px-[30px] ss:px-16 md:px-20 relative">
            <Hero data={data} />
            <Details data={data} />
            <Connect />
            <div className="hidden ss:flex text-[#EEEFF4] absolute top-[105px] text-[18px] left-[-104px] rotate-90 leading-none tracking-[1.2em]">
              CONTACT
            </div>
          </div>
          <Footer />
          {isScrolled && (
            <button
              onClick={scrollToTop}
              className="w-[40px] h-[40px] fixed flex -rotate-90 justify-center items-center p-3 cursor-pointer bg-red md:bg-dark right-3 
              z-[20002] bottom-10"
            >
              <Image
                src="/assets/icons/arrow-icon.svg"
                alt="up"
                width={33}
                height={27}
              />
            </button>
          )}
        </section>
      )}
    </div>
  );
};

export default Page;
