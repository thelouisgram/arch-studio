"use client";
import React, { useState } from "react";
import Pagination from "./Pagination";
import { DataProps } from "../../../../types/home";
import Slider from "./Slider";

const Banner: React.FC<DataProps> = ({ data }) => {
  const [page, setPage] = useState(0);
  return (
    <div className="px-20 relative h-[720px] w-full mb-[100px]">
      <Slider data={data} page={page} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Banner;
