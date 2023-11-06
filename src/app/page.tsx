"use client";

import Pagination from "@/layout/home/Pagination";
import React, { useState, useEffect } from "react";
import FetchData from "../../utils/home/FetchData";

const Page = () => {

  return (
    <div className="px-20 relative h-[720px] w-full">
      <Pagination />
    </div>
  );
};

export default Page;
