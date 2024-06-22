import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginState } from "../../Redux/store/authentication";
import swal from "sweetalert";
export default function FormLogin() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loginUser = async (e) => {
    e.preventDefault();

    let body = {
      identifier,
      password,
    };

    if (identifier.length & password.length) {
      let url = "http://localhost:4000/v1/auth/login";
      await dispatch(loginState({ url, body }));
    } else {
      swal({
        title: "لطفا تمامی فیلد ها را پر کنید ",
        icon: "error",
        buttons: "ok",
      });
    }
  };
  return (
    <>
      <div className=" container mx-auto">
        <div className="mt-20 text-center">
          <div className="flex justify-around  xl:mr-[200px] xl:ml-[200px]  child:text-xl  child:transition-all child:duration-500">
            <Link
              to="/register"
              className="border  grid  border-neutral-900 pr-4 pl-4 pt-1 pb-1 hover:bg-neutral-400 hover:text-white"
            >
              REGISTER
            </Link>
            <Link
              to="/login"
              className="border border-neutral-900 pr-4 pl-4 pt-1 pb-1 hover:bg-neutral-400 hover:text-white"
            >
              LOGIN
            </Link>
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
                  type="text"
                  className="form-control text-left "
                  placeholder="username"
                  onInput={(e) => setIdentifier(e.target.value)}
                />
              </div>
              <div className="col">
                <input
                  type="password"
                  className="form-control text-left"
                  placeholder="password"
                  onInput={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button
              onClick={loginUser}
              className="text-[18px] pt-[3px] sm:pt-[3px] md:pb-[50px] hover:bg-neutral-400 hover:text-white transition-all duration-500 md:text-[30px] w-[40%] sm:w-[27%]  xl:w-[20%] mt-8 h-[35px] md:h-[40px]  border border-neutral-800"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
