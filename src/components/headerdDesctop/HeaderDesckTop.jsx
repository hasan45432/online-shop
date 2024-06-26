import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useStore } from "react-redux";
import { getStates } from "../../Redux/store/fetchStor";

export default function HeaderDesckTop(props) {
  const [user, setUser] = useState("");


  const dispatch = useDispatch();
  const store = useStore();

  const fetchDataUser = async () => {
    let url = "http://localhost:4000/v1/auth/me";

    await dispatch(getStates({ url }));

    let userData = store.getState().fetchStor;
    setUser(userData.username);
  };

  useEffect(() => {
      fetchDataUser();
  }, [getStates]);

  return (
    <div>
      <header
        className={`${props.position} z-50 hidden md:flex backdrop-blur-[6px]  text-lg bg-neutral-200 w-[90%] shadow-xl right-0 left-0 mx-auto items-center mt-8 justify-between rounded-2xl h-20`}
      >
        <nav className="flex gap-5 items-center mr-5">
          <div></div>
          <ul className="flex gap-3  child:text-[19px]  text-black/60 font-vazirBlack child-hover:text-orange-500 child:transition-colors duration-300">
            <li>
              <Link to="/" className=" ">
                صفحه اصلی
              </Link>
            </li>
            <li className="">
              <Link to="/products"> تمام محصولات </Link>
            </li>
            <li>
              <a href="#"> دیکشنری </a>
            </li>
            <li>
              <a href="#"> بلاگ </a>
            </li>
            <li>
              <a href="#"> درباره ی ما </a>
            </li>
            <li>
              <a href="#"> تماس با ما </a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-5 text-gray-100 ml-5">
          <div className="flex gap-1 items-center moodinbody">
            <img
              className="block w-8 filter invert cursor-pointer"
              src="./CoffeeShop-Files//icons/icons8-shopping-cart-100.png"
              alt=""
            />
            <img
              className="block w-8 filter invert cursor-pointer moonIcon"
              src="./CoffeeShop-Files//icons/icons8-moon-50.png"
              alt=""
            />
            <img
              className="hidden w-8 filter invert cursor-pointer sunIcon"
              src="./CoffeeShop-Files/icons/icons8-sun-30.png"
              alt=""
            />
          </div>
          <div className="flex gap-2 child-hover:text-orange-500 child-hover:transition-all child-hover:duration-300">
            {!user ? (
              <>
                <Link className="text-black/60 font-vazirBold" to="/login">
                  ورود
                </Link>
                <p className=" w-[30px] h-[1px] bg-black/60  rotate-90 mt-3"></p>

                <Link className="text-black/60   font-vazirBold" to="/register">
                  ثبت نام
                </Link>
              </>
            ) : (
              <div className=" flex items-center gap-4">
                <div className="border-2 border-black/10 text-orange-500 pr-3 pl-3 rounded-[10px] text-center pb-8 min-w-[100px] h-8">
                  {user ? user : ""}
                </div>
                <Link to="/usershoppingbasket">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-black cursor-pointer hover:text-orange-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
