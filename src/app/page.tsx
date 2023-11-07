"use client";

import React, { useEffect, useState } from "react";
import FetchData from "../../utils/home/FetchData";
import Banner from "@/layout/home/banner/Banner";
import Welcome from "@/layout/home/welcome/Welcome";
import Hero from "@/layout/home/about/Hero";
import Featured from "@/layout/home/featured/Featured";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
          } font-Spartan px-16 container w-full h-full text-dark relative`}
        >
          <Header />
          <Banner data={data} />
          <Welcome data={data} />
          <Hero data={data} />
          <Featured data={data} />
          <Footer />
        </section>
      )}
    </div>
  );
};

export default Page;
