import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
 
  return (
    <>
      <Link to={`/productsInfo/${props.shortName}`}>
        <div className="  p-4 flex flex-col items-center h-[190px] shadow-md  m-1 hover:scale-110 transition  duration-300  truncate	 sm:h-[300px]  md:h-[270px]   xl:h-[330px] 2xl:h-[370px] bg-white rounded-[15px]">
          <img
            src={`http://localhost:4000/courses/covers/${props.cover}`}
            alt=""
            className=" h-[100px] sm:h-[200px] md:h-[170px] xl:h-[230px]"
          />
          <div className="flex flex-col items-center">
            <p className="text-[10px] sm:text-[15px] custom:text-14 md:text-[14px] 2xl:pt-3 lg:text-[19px]">
              {props.name}
            </p>
            <p className="text-[14px] sm:text-[15px] md:text-[14px] mt-1 lg:text-[19px] mb-2 text-orange-500">
              ${props.price}
            </p>
          </div>
          <button className="border pr-4 pl-4 pb-1 m-2">خرید</button>
        </div>
      </Link>
    </>
  );
}
