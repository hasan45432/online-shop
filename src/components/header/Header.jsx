import React from "react";
import { useState } from "react";

export default function Header() {
  const [action, setAction] = useState("");

  const openMenu = () => {
    setAction("right-[0px]");
    console.log("erfan");
  };

  const closeMenu = () => {
    setAction("-right-[550px]");
    console.log("asasasa");
  };
  return (
    <>
      <div className="flex items-center justify-around bg-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="xl:w-[50px] mt-6 mb-8 xl:h-[50px] w-[35px] h-[35px] cursor-pointer "
          onClick={openMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
          />
        </svg>
        <h1 className=" xl:text-[140px] md:text-[80px] mt-4 mb-4 hidden sm:block text-[40px]">HIFashion</h1>

        <ul
          className={`absolute top-0 md:child:mt-14 p-3 md:p-10 transition-all duration-500 child:mt-3 bottom-0 w-[80%] md:w-[28%]  shadow-2xl bg-header ${action} -right-[800px] sm:text-sm md:text-md xl:text-3xl `}
        >
          <li>
            <a href="#">تمامی محصولات </a>
          </li>
          <li>
            <a href="#"> مقاله ها </a>
          </li>
          <li>
            <a href="#"> مقاله ها </a>
          </li>
          <li>
            <a href="#"> مقاله ها </a>
          </li>
          <li>
            <a href="#"> مقاله ها </a>
          </li>
          <li>
            <a href="#"> مقاله ها </a>
          </li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="xl:size-10 size-8  md:w-[24px]  md:h-[24px] absolute -top-1 cursor-pointer left-0"
            onClick={closeMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </ul>

        <div className="flex gap-1 sm:gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="xl:w-[50px] xl:h-[50px]  w-[35px] h-[35px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="xl:w-[50px] xl:h-[50px] w-[35px] h-[35px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
