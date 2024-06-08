import React, { useState } from "react";
import HeaderDesckTop from "../../components/headerdDesctop/HeaderDesckTop";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
export default function Register() {
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
          <form class="row g-3">
            <div class="col-md-6">
              <input
                type="text"
                className="form-control text-left"
                id="inputEmail4"
                placeholder="firstName"
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                className="form-control text-left"
                id="inputPassword4"
                placeholder="lastName"
              />
            </div>
            <div class="col-6">
              <input
                type="email"
                className="form-control text-left"
                id="inputAddress"
                placeholder="email"
              />
            </div>
            <div class="col-6">
              <input
                type="password"
                className="form-control text-left"
                id="inputAddress2"
                placeholder="password"
              />
            </div>

            <a
              href=""
              className="text-[20px] hover:bg-neutral-400 transition-all duration-300 mx-auto md:text-[30px] w-[40%] mt-8 h-[35px] md:h-[50px] border border-neutral-800"
            >
              Login
            </a>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
