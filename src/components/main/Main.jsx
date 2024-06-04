import React from "react";
import Product from "../product/Product";
import { Slider } from "../slider/Slider";

export default function Main() {
  return (
    <>
      <div>
        <img
          src="../../../public/img/cbbafce7621f797d710eb1be26e41b7a.png"
          alt=""
          className="xl:h-[900px] w-[100%] sm:rounded-br-[100px] mt-0 sm:rounded-bl-[100px] sm:h-[600px] h-[300px]  sm:w-[100%]  bg-center bg-cover"
        />
        <div className=" container mx-auto">
          <div className="flex flex-col items-center ">
            <h2 className="text-center text-[35px] md:text-[70px] mt-[30px] ">
              NEW ARRIVAL
            </h2>
            <p className=" w-[180px] md:w-[260px]  h-[1px] bg-line mt-4 mb-4"></p>
          </div>

          <div className=" grid gap-2 sm:p-2 md:grid-cols-3 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 mt-4 mb-4 child-hover:shadow-2xl child:transition-all child:duration-500">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <div className=" text-center mb-10 mt-8 ">
            <a
              href=""
              className="pr-[50px] pl-[50px] pt-1 pb-1  border border-black md:pr-[120px] md:pl-[120px] md:pt-2 md:pb-2  text-2xl "
            >
              <span> MORE</span>
            </a>
          </div>
          <div className="mt-16">
            <h2 className=" text-center text-4xl md:text-5xl text-black ">
              just for you
            </h2>
            <p className="mx-auto w-[120px] md:w-[200px]  h-[1px] bg-line mt-4 mb-4"></p>
          </div>
        </div>
        <div className=" container ">
          <Slider slides={<Product />} />
        </div>
      </div>
    </>
  );
}
