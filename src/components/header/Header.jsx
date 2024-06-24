import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Header() {
  const [action, setAction] = useState("");

  const openMenu = () => {
    setAction("right-[1px]");
  };

  const closeMenu = () => {
    setAction("-right-[1000px]");
  };
  return (
    <>
      <header className=" bg-neutral-200  px-4 h-16 flex items-center  transition-all duration-500 child:transition-all child:duration-500 justify-between lg:hidden">
        <nav
          className={`flex z-50 absolute  colsAction navigation top-0 bottom-0 ${action}  shadow-normal -right-[1000px] bottom-0  w-[70%] sm:w-[50%] bg-neutral-200 shadow-xl flex-col gap-5 items-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 absolute top-2 left-2 cursor-pointer"
            onClick={closeMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
          <div className="w-[80%] flex items-center justify-between mt-5">
            <div className="flex iconOpenMenu closeIcon flex-col gap-1 active child:transition-all child:duration-500 cursor-pointer"></div>
          </div>
          <ul className="flex   text-black transition-all duration-700 child:transition-all child:duration-300 text-md md:text-[20px] w-[80%] child:p-[8px]  child:rounded-[16px] flex-col absolute top-16 gap-2 child:md:mt-[10px] right-5  font-vazirBlack child-hover:bg-neutral-300  child-hover:text-blue-600  child:w-[100%]">
            <li>
              <a href="#" className=" text-black">
                صفحه اصلی
              </a>
            </li>
            <li className="relative group">
              <div className="flex justify-between transition-all duration-700 w-[100%] child:transition-all child:duration-500">
                <a href="#"> فروشگاه </a>
              </div>
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
            <li>
              <Link to="/login">ورود</Link>
            </li>

            <li>
              <Link className="font-vazirBold" to="/register">
                ثبت نام
              </Link>
            </li>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 ipad:size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </li>
          </ul>
        </nav>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 sm:size-10 cursor-pointer"
          onClick={openMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 sm:size-10 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </header>
    </>
  );
}
