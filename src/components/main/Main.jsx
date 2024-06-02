import React from "react";
import MainBox from "../mainbox/MainBox";
export default function Main() {
  return (
    <div className=" container mx-auto mt-8">
      <div className="md:h-[450px] h-[250px]">
        <img
          src="../../../public/img/44506103000123548699.jpg"
          alt=""
          className="w-[80%] mx-auto shadow-lg h-[100%] bg-center bg-no-repeat rounded-[30px]"
        />
      </div>
      <div className="grid  2xl:grid-cols-4 sm:grid-cols-2 gap-4  grid-cols-1 mt-5 mb-5 md:p-5">
        <MainBox />
        <MainBox />
        <MainBox />
        <MainBox />
      </div>
    </div>
  );
}
