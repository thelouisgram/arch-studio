import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-[100dvh] bg-gray-900 flex justify-center items-center z-[1000] transition-all duration-300">
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default Loader;
