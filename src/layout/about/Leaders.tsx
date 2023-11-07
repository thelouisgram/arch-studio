import React from "react";
import { DataProps } from "../../../types/home";
import Image from "next/image";

const Leaders: React.FC<DataProps> = ({ data }) => {
  const leaders = data?.aboutData?.leaders;
  const renderedLeaders = leaders?.leadersInfo.map(
    (item: any, index: number) => {
      return (
        <div key={index} className="w-full h-full relative ">
          <div className="w-full h-auto mb-5">
            <div className="w-full h-auto relative group">
              <Image
                src={item?.img}
                alt="leaders image"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="w-full absolute h-full top-0 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="z-[4] flex h-full w-full justify-center items-center gap-3 ">
                  <Image
                    src="/assets/icons/linkedin.svg"
                    alt="linkedin logo"
                    width={30}
                    height={30}
                    className="z-[4]"
                  />
                  <Image
                    src="/assets/icons/twitter.svg"
                    alt="twitter logo"
                    width={30}
                    height={30}
                    className="z-[4]"
                  />
                  <div className="w-full absolute h-full top-0 bg-black opacity-25 z-[2]" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-[22px] font-semibold">{item?.name}</h5>
            <p className="text-[22px]">{item?.role}</p>
          </div>
        </div>
      );
    }
  );
  return (
    <div className="w-full h-full flex gap-20 mb-[172px]">
      <h4 className="font-semibold text-[64px] w-[216px] leading-none">
        {leaders?.heading}
      </h4>
      <div className="grid grid-cols-2 w-full h-full gap-10">
        {renderedLeaders}
      </div>
    </div>
  );
};

export default Leaders;