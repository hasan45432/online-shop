import React from "react";
import Product from "../product/Product";
export default function Main() {
  return (
    <>
      <div>
        <img
          src="../../../public/img/cbbafce7621f797d710eb1be26e41b7a.png"
          alt=""
          className="xl:h-[800px] w-[100%] sm:rounded-br-[100px] sm:rounded-bl-[100px] sm:h-[600px] h-[300px]  sm:w-[100%]  bg-center bg-cover"
        />
        <div className=" container mx-auto">
          <div className="flex flex-col items-center ">
            <h2 className="text-center text-[70px] mt-[30px] ">NEW ARRIVAL</h2>
            <p className=" w-[260px]  h-[1px] bg-line mt-4 mb-4"></p>
          </div>

          <div className=" grid gap-4 sm:p-2 md:grid-cols-2 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-4 mb-4 child-hover:shadow-2xl child:transition-all child:duration-500">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />

          </div>
        </div>
      </div>
    </>
  );
}
