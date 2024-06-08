import React from "react";

export default function Blog() {
  return (
    <>
      <div className="flex flex-col justify-center items-center overflow-hidden  w-[160px]  mt-3 h-[220px] mx-auto  sm:w-[240px] sm:h-[300px] md:w-[235px] md:h-[320px] lg:w-[300px] lg:h-[400px]">
    
        <img
          src="../../../public/img/blog/blog1.png"
          className="w-[90%] h-[70%] sm:w-[100%] sm:h-[80%]"
        />
        <p className="text-[10px] md:text-xl">2021 Style Guide: The Biggest Fall Trends</p>
      </div>
    </>
  );
}
