import React from "react";

export default function Product() {
  return (
    <>
      <div className="  h-[210px] m-1 hover:scale-105 transition  duration-300  truncate	 sm:h-[300px]  md:h-[300px]   xl:h-[330px] 2xl:h-[370px] bg-white rounded-[15px]">
        <img
          src="../../../public/img/blog/blog3.png"
          alt=""
          className=" h-[80%] "
        />
        <div className="flex flex-col items-center">
          <p className="text-[10px] sm:text-[15px]   custom:text-14 md:text-[14px]  lg:text-[19px]">
            21WN reversible angora 21WN reversible angora 21WN reversible angora
            21WN reversible angora 21WN reversible angora 21WN reversible angora
          </p>

          <p className="text-[14px] sm:text-[15px] md:text-[14px]  lg:text-[19px] mb-2 text-orange-500">
            $120
          </p>
        </div>
      </div>
    </>
  );
}
