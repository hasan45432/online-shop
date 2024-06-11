import React, { useState } from "react";
import Inputs from "../inputs/Inputs";
export default function FormRegister() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
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
              onUserName={(e) => setUserName(e)}
            />
            <Inputs
              type={"text"}
              className={"form-control text-left"}
              id={"inputEmail4"}
              placeholder={"firstName"}
              onFirstName={(e) => setFirstName(e)}
            />
            <Inputs
              type={"text"}
              className={"form-control text-left"}
              id={"inputEmail4"}
              placeholder={"lastName"}
              onLastName={(e) => setLastName(e)}
            />
            <Inputs
              type={"text"}
              className={"form-control text-left"}
              id={"inputEmail4"}
              placeholder={"email"}
              onEmail={(e) => setEmail(e)}
            />
            <Inputs
              type={"text"}
              className={"form-control text-left"}
              id={"inputEmail4"}
              placeholder={"password"}
              onPassword={(e) => setPassword(e)}
            />
          </form>
          <button className="text-[20px] hover:bg-neutral-400 hover:text-white  transition-all duration-500 mx-auto md:text-[30px] w-[40%] mt-8 h-[35px]  md:pb-[50px] border border-neutral-800">
            Login
          </button>
        </div>
      </div>
    </>
  );
}
