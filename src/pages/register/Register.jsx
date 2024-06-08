import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createState } from "../../Redux/store/fetchStor";
import Inputs from "../../components/inputs/Inputs";
import HeaderDesckTop from "../../components/headerdDesctop/HeaderDesckTop";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
export default function Register() {
  const dispatch = useDispatch();

  const addNewUser = (e) => {
    e.preventDefault();
    let body = {
      email: "John@gmail.com",
      username: "johnd",
      password: "m38rmF$",
      name: {
        firstname: "John",
        lastname: "Doe",
      },
    };
  };

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
          <div className="flex justify-around  child:text-xl  child:transition-all child:duration-500">
            <a
              href=""
              className="border grid  border-neutral-900 pr-4 pl-4 pt-1 pb-1 hover:bg-neutral-400 hover:text-white"
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
          <form className="flex flex-col items-center gap-4">
            <Inputs
              type={"text"}
              className={"form-control text-left"}
              id={"inputEmail4"}
              placeholder={"userName"}
            />
            <Inputs
              type={"text"}
              className={"form-control text-left"}
              id={"inputEmail4"}
              placeholder={"firstName"}
            />
            <Inputs
              type={"text"}
              className={"form-control text-left"}
              id={"inputEmail4"}
              placeholder={"lastName"}
            />
            <Inputs
              type={"text"}
              className={"form-control text-left"}
              id={"inputEmail4"}
              placeholder={"email"}
            />
            <Inputs
              type={"text"}
              className={"form-control text-left"}
              id={"inputEmail4"}
              placeholder={"password"}
            />
          </form>
          <button
            onClick={addNewUser}
            className="text-[20px] hover:bg-neutral-400 hover:text-white  transition-all duration-500 mx-auto md:text-[30px] w-[40%] mt-8 h-[35px] md:h-[50px] border border-neutral-800"
          >
            Login
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
