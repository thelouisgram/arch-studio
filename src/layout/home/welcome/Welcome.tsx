import React from "react";
import { DataProps } from "../../../../types/home";
import Image from "next/image";

const Welcome: React.FC<DataProps> = ({ data }) => {
  const details = data?.HomePageWelcome;

  return (
    <div className="w-full h-full px-[30px] ss:px-16 md:px-20 mb-[128px]">
      <div className="w-full h-full relative z-[10]">
        <h1 className="text-[64px] ss:text-[140px] md:text-[230px] text-[#EEEFF4] font-bold leading-none z-[10] mb-10 ss:mb-0">
          Welcome
        </h1>
        <div className="w-full flex gap-10">
          <div className="md:pl-[180px] md:mt-[-50px]">
            <h3 className="text-dark text-[40px] ss:text-[64px] ss:w-[450px] leading-none font-semibold mb-[40px]">
              {details?.heading}
            </h3>
            <div className="w-full md:w-[450px] flex flex-col gap-[30px] text-[22px] text-darkGrey">
              <p>
                We have a unique network and skill-set to help bring your
                projects to life. Our small team of highly skilled individuals
                combined with our large network put us in a strong position to
                deliver exceptional results.
              </p>
              <p>
                Over the past 10 years, we have worked on all kinds of projects.
                From stations to high-rise buildings, we create spaces that
                inspire and delight.
              </p>
              <p>
                We work closely with our clients so that we understand the
                intricacies of each project. This allows us to work in harmony
                the surrounding area to create truly stunning projects that will
                stand the test of time.
              </p>
            </div>
          </div>
          <div className="hidden md:block aspect-[350/568] mt-[-100px] w-auto h-[690px] z-[-3] overflow-hidden">
            <Image
              src={details?.img}
              width={500}
              height={1000}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
