import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useStore, useSelector } from "react-redux";

import { loginState, getUserData } from "../../Redux/store/authentication";
import swal from "sweetalert";
import { useNavigate, useLocation } from "react-router-dom";

export default function FormLogin() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const store = useStore();
  const navigate = useNavigate();
  const userToken = localStorage.getItem("users");

  const loginUser = async (e) => {
    e.preventDefault();

    const body = {
      identifier,
      password,
    };

    if (identifier.length && password.length) {
      if (password.length >= 8 && password.length <= 11) {
        if (/^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/.test(identifier)) {
          const url = "http://localhost:4000/v1/auth/login";
          await dispatch(loginState({ url, body }));
          let accessToken = store.getState().authentication.accessToken;
          if (accessToken !== undefined) {
            localStorage.setItem("users", accessToken);
          }
          if (accessToken) {
            navigate("/");
          }
        } else {
          swal({
            title: "ایمیل نادرست است",
            icon: "error",
            buttons: "ok",
          });
        }
      } else {
        swal({
          title: "تعداد کاراکتر پسورد باید بیش تر از هشت عدد باشد",
          icon: "error",
          buttons: "ok",
        });
      }
    } else {
      swal({
        title: "لطفا تمامی فیلد ها را پر کنید ",
        icon: "error",
        buttons: "ok",
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    if (userToken) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <div className="mt-20 text-center">
          <div className="flex justify-around child:text-[15px]  xl:mr-[200px] xl:ml-[200px]  child:text-md  child:transition-all child:duration-500">
            <Link
              to="/register"
              className="border  grid  border-neutral-900 pr-4 pl-4 pt-1 pb-1 hover:bg-neutral-400 hover:text-white"
            >
              REGISTER
            </Link>
            <Link
              to="/"
              className="border sm:ml-6 grid  border-neutral-900 pr-4 pl-4 pt-1 pb-1 hover:bg-neutral-400 hover:text-white"
            >
              HOME
            </Link>
            <Link
              to="/login"
              className="border border-neutral-900 pr-4 pl-4 pt-1 pb-1 hover:bg-neutral-400 hover:text-white"
            >
              LOGIN
            </Link>
          </div>
          <div className="mt-8 mb-8">
            <h2 className="text-3xl">Have an account?</h2>
            <p className="mt-2">
              Sign in to speed up the checkout process and manage your orders
            </p>
          </div>
          <form className="flex flex-col justify-center items-center">
            <div className="flex flex-col w-[80%] sm:w-[50%] xl:w-[40%] 2xl:w-[35%] gap-3">
              <input
                type="email"
                className="form-control text-left"
                placeholder="email"
                onInput={(e) => setIdentifier(e.target.value)}
              />
              <input
                type="password"
                className="form-control text-left"
                placeholder="password"
                onInput={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={loginUser}
              className="text-[18px] pt-[3px] pb-[33px] sm:pt-[3px] md:pb-[50px] hover:bg-neutral-400 hover:text-white transition-all duration-500 md:text-[30px] w-[40%] sm:w-[27%]  xl:w-[20%] mt-8 h-[35px] md:h-[40px]  border border-neutral-800"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
