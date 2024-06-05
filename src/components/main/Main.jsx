import React from "react";
import Product from "../product/Product";
import { Slider } from "../slider/Slider";
import Information from "../informaicon/Information";
import { SliderHeader } from "../sliderHeader/SliderHeader";

export default function Main() {
  return (
    <>
      <div>
        <SliderHeader />
        <div className=" container mx-auto">
          <div className="flex flex-col items-center ">
            <h2 className="text-center text-[35px] md:text-[70px] mt-[30px] ">
              NEW ARRIVAL
            </h2>
            <p className=" w-[180px] md:w-[260px]  h-[1px] bg-line mt-4 mb-4"></p>
          </div>

          <div className=" grid  sm:p-2 md:grid-cols-3 grid-cols-2 sm:grid-cols-2  xl:grid-cols-4 mt-4 mb-4 child-hover:shadow-2xl child:transition-all child:duration-500">
            <Product />
            <Product />
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
        <div className=" container">
          <Slider slides={<Product />} />
        </div>

        <div className=" bg-neutral-300 h-[400px] sm:h-[500px] w-[100%] mt-10 ">
          <div className=" text-center p-1">
            <h2 className="text-4xl md:text-5xl text-black pt-4">HIFashion</h2>
            <p className="text-[14px] md:text-[14px] break-words lg:text-[19px] mt-3">
              Making a luxurious lifestyle accessible for a generous group of
            </p>
            <p className="text-[14px] md:text-[14px] break-words lg:text-[19px]">
              women is our daily drive.
            </p>
          </div>
          <div className="grid gap-8 p-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-10 lg:mt-20">
            <Information />
            <Information />
            <Information />
            <Information />
          </div>
        </div>
      </div>
    </>
  );
}
