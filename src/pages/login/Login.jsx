import React, { useState } from "react";
import HeaderDesckTop from "../../components/headerdDesctop/HeaderDesckTop";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
export default function Login() {
  return (
    <>
      <div className="block lg:hidden">
        <Header />
      </div>
      <div className=" hidden lg:block">
        <HeaderDesckTop />
      </div>
      <div className=" container mx-auto">
        <div className="mt-20 text-center">
          <div className="flex justify-center gap-32 child:text-xl child-hover:text-blue-400 child:transition-all child:duration-300">
            <a href="">REGISTER</a>
            <a href="">LOGIN</a>
          </div>
          <div className="mt-8 mb-8">
            <h2 className="text-3xl">?Have an account</h2>
            <p className="mt-2">Sign in to speed up the checkout</p>
            <p> process and manage your orders</p>
          </div>
          <form className="flex flex-col justify-center items-center">
            <div className="flex flex-col w-[80%] sm:w-[50%] gap-3">
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
            <Link to="/" className="text-[20px] hover:bg-neutral-400 transition-all duration-300 md:text-[30px] w-[40%] mt-8 h-[35px] md:h-[50px] border border-neutral-800">Login</Link>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
