import React from "react";

export default function Product() {
  return (
    <>
      <div className="w-[140px]  mt-3 h-[200px]  mx-auto sm:w-[240px] truncate	 sm:h-[300px] md:w-[235px] md:h-[320px] lg:w-[300px] lg:h-[400px]  bg-white rounded-[5px]">
        <img
          src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
          alt=""
          className="w-[100%] h-[80%] p-3"
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
