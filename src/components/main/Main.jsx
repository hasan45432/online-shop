import React from "react";
import Product from "../product/Product";
import { Slider } from "../slider/Slider";
import Blog from "../blog/Blog";

import { SliderHeader } from "../sliderHeader/SliderHeader";
export default function Main() {
  return (
    <>
      <div>
        <div>
          <SliderHeader />
        </div>
        <div className=" container mx-auto">
          <div className="flex flex-col items-center ">
            <h2 className="text-center text-[35px] md:text-[70px] mt-[30px] ">
              NEW ARRIVAL
            </h2>
            <p className=" w-[180px] md:w-[260px]  h-[1px] bg-line mt-4 mb-4"></p>
          </div>

          <div className="grid xl:m-[130px] grid-cols-2 2xl:gap-4 xl:gap-4  md:gap-3 sm:gap-2 sm:p-2 md:grid-cols-3 xl:grid-cols-4 mt-4 mb-4  ">
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
              className="pr-[50px]  pl-[50px] hover:text-white hover:bg-neutral-400 pt-1 pb-2 transition-all duration-300  border  md:pr-[120px] md:pl-[120px] md:pt-2 md:pb-2  text-2xl "
            >
              MORE
            </a>
          </div>
        </div>
        <div className=" container ">
          <div className="xl:mr-[130px] xl:ml-[130px] mt-[70px]">
            <div className="mt-10 ">
              <h2 className=" text-center text-4xl md:text-5xl text-black ">
                just for you
              </h2>
              <p className="mx-auto w-[120px] md:w-[200px]  h-[1px] bg-line mt-4 mb-4"></p>
            </div>
            <Slider slides={<Product />} />
          </div>
          <div className="mt-[70px]">
            <div>
              <h2 className="text-center text-[30px] md:text-[60px] mt-[30px]">
                BLOG
              </h2>
              <p className=" w-[180px] md:w-[260px] mx-auto h-[1px] bg-line mt-2 mb-4"></p>
            </div>
            <div className="grid  xl:mr-[130px] xl:ml-[130px]  2xl:gap-5 xl:gap-4  md:gap-3 sm:gap-2 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              <Blog />
              <Blog />
              <Blog />
              <Blog />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
