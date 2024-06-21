import React from "react";
import { Link } from "react-router-dom";
export default function FormLogin() {
  return (
    <>
      <div className=" container mx-auto">
        <div className="mt-20 text-center">
          <div className="flex justify-around child:text-xl  child:transition-all child:duration-500">
            <a
              href=""
              className="border text-[15px] border-neutral-900 pr-4 pl-4 pt-1 pb-1 hover:bg-neutral-400 hover:text-white"
            >
              REGISTER
            </a>
            <a
              href=""
              className="border border-neutral-900 pr-4 pl-4 pt-1 pb-1 hover:bg-neutral-400 hover:text-white"
            >
              LOGIN
            </a>
          </div>
          <div className="mt-8 mb-8">
            <h2 className="text-3xl">?Have an account</h2>
            <p className="mt-2">Sign in to speed up the checkout</p>
            <p> process and manage your orders</p>
          </div>
          <form className="flex flex-col justify-center items-center">
            <div className="flex flex-col w-[80%] sm:w-[50%] xl:w-[40%] 2xl:w-[35%] gap-3">
              <div className="">
                <input
                  type="email"
                  className="form-control text-left "
                  placeholder="First name"
                  aria-label="First name"
                />
              </div>
              <div className="col">
                <input
                  type="password"
                  className="form-control text-left"
                  placeholder="Last name"
                  aria-label="Last name"
                />
              </div>
            </div>
            <Link
              to="#"
              className="text-[18px] pt-[3px] sm:pt-[3px] md:pb-[50px] hover:bg-neutral-400 hover:text-white transition-all duration-500 md:text-[30px] w-[40%] sm:w-[27%]  xl:w-[20%] mt-8 h-[35px] md:h-[40px]  border border-neutral-800"
            >
              Login
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
