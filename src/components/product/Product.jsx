import React from "react";

export default function Product() {
  return (
    <>
      <div className="w-[153px] mt-3 h-[215px] mx-auto md:w-[235px] md:h-[320px] lg:w-[300px] lg:h-[400px]  bg-white rounded-[10px]">
        <img
          src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
          alt=""
          className="w-[100%] h-[80%] p-4"
        />
        <div className="flex flex-col items-center">
          <p className="text-[10px] md:text-[14px] break-words lg:text-[19px]">
            21WN reversible angora cardigan
          </p>
          <p className="text-[10px] md:text-[14px]  lg:text-[19px] text-orange-500">$120</p>
        </div>
      </div>
    </>
  );
}
