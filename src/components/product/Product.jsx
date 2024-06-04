import React from "react";

export default function Product() {
  return (
    <>
      <div className="w-[140px] h-[200px]  md:w-[235px] mx-auto md:h-[300px] lg:w-[300px] lg:h-[400px] bg-white rounded-[10px]">
        <img
          src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
          alt=""
          className="w-[100%] h-[80%] p-4"
        />
        <div className="flex flex-col items-center mt-2">
          <p>21WN reversible angora cardigan</p>
          <p className=" text-orange-500">$120</p>
        </div>
      </div>
    </>
  );
}
