import React, { useState } from "react";

const Pagination:React.FC = () => {
  const [page, setPage] = useState(0);
  const pages = ["01", "02", "03", "04"];
  const pagesButton = pages.map((item: any, index: number) => {
    return (
      <div
        key={index}
        onClick={() => setPage(index)}
        className={`w-20 h-20 cursor-pointer ${
          page === index
            ? "bg-dark text-white"
            : "bg-white text-dark hover:bg-grey "
        } flex justify-center items-center `}
      >
        {item}
      </div>
    );
  });
  return <div className="absolute left-0 bottom-0 flex font-semibold">{pagesButton}</div>;
};

export default Pagination;
