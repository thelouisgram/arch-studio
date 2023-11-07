import React from "react";
import { DataProps } from "../../../types/home";

const Details: React.FC<DataProps> = ({ data }) => {
  const details = data?.contactData?.sectionDetailsAndMap;
  return (
    <div className="w-full h-full flex mb-[172px] gap-40">
      <h2 className="font-semibold text-[64px] w-[216px] leading-none">
        Contact Details
      </h2>
      <div className="flex gap-20">
        {details?.offices.map((item: any, index: number) => {
          return (
            <div key={index}>
              <h2 className="font-semibold mb-[30px] text-[22px]">{item.name}</h2>
              <div className="flex flex-col gap-[15px] text-[18px]">
                <div className="flex gap-5">
                  <p>Mail: </p>
                  <p>{item.mail}</p>
                </div>
                <div className="flex gap-5">
                  <p>Address: </p>
                  <p>{item.address}</p>
                </div>
                <div className="flex gap-5">
                  <p>Phone: </p>
                  <p>{item.phone}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
