import React, { useState } from "react";

export default function Header() {
  const [action, setAction] = useState("");
  const closeMenu = () => {
    setAction("-right-[480px]");
  };
  const openMenu = () => {
    setAction("right-[0px]");
  };
  return (
    <>
      <div className=" container mx-auto  items-center justify-between  md:p-6 flex flex-col sm:mt-0 child:text-[18px] lg:flex lg:flex-row ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 absolute right-4 top-3 mb-[30px] cursor-pointer sm:hidden"
          onClick={() => openMenu()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <div className="mt-20 ">
          <p className="font-gandom ">
            درصورت داشتن هرگونه مشکل یا سوال با پشتیبانی تماس بگیرید.
          </p>
          <div className=" relative">
            <input
              type="text"
              className="h-[50px] shadow-lg w-[100%] lg:w-[100%] rounded-[30px] mt-4 mb-4"
            />
            <div className="absolute top-[32px] left-[10px] sm:left-[10px] lg:left-[8px]">
              <a
                href="#"
                className="pt-[4px] pb-[12px] pr-[17px] pl-[17px] text-white bg-blue-500 rounded-[30px]"
              >
                جستجو
              </a>
            </div>
          </div>
          {/* nav deckTop */}
          <nav className="child:text-[16px] hidden sm:flex">
            <ul className="flex gap-3 child-hover:text-blue-700 child:transition-all child:duration-200">
              <li>
                <a href="#">تمامی محصولات</a>
              </li>
              <li>
                <a href="">تخفیف</a>
              </li>
              <li>
                <a href="#"> لباس </a>
              </li>
              <li>
                <a href="#"> کفش </a>
              </li>
              <li>
                <a href="#"> جدید ترین ها </a>
              </li>
            </ul>
          </nav>
          {/* nav mobil */}

          <nav className="sm:hidden child:transition-all child:duration-500">
            <ul
              className={`flex p-12 shadow-2xl flex-col child:text-[16px] ${action} w-[70%] absolute top-0 bottom-0 -right-[480px] bg-neutral-200 gap-10 child-hover:text-blue-600 child:hover:transition-all child:duration-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 left-6 absolute cursor-pointer"
                onClick={() => closeMenu()}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
              <li>
                <a href="#">تمامی محصولات</a>
              </li>
              <li>
                <a href="">تخفیف</a>
              </li>
              <li>
                <a href="#"> لباس </a>
              </li>
              <li>
                <a href="#"> کفش </a>
              </li>
              <li>
                <a href="#"> جدید ترین ها </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-10 ml-4">
          <ul className="flex gap-8  mr-14  md:mr-8  pl-12">
            <li>
              <a href="#">راهنمای خرید </a>
            </li>
            <li>
              <a href="#"> پیگیری سفارش </a>
            </li>
          </ul>
          <div className="">
            <ul className="mt-2 lg:flex lg:items-center lg:flex-row mb-10 flex flex-col  items-center   text-center">
              <li className=" mt-4  bg-blue-200 mx-6 text-blue-700 w-[100%] lg:w-[160px] pt-[8px] pb-[15px] rounded-[30px]  transition-all duration-300">
                <a href="#" className=" inline-block w-[100%]">
                  ثبت نام | ورود
                </a>
              </li>
              <li className="mt-6 lg:w-[160px] w-[100%] hover:bg-blue-400 bg-blue-500 rounded-[30px] pt-[8px] pb-[15px] ">
                <a
                  href="#"
                  className=" transition-all duration-300 text-white rounded-[30px] w-[100%]"
                >
                  سبد خرید
                </a>
              </li>
            </ul>
          </div>

          <div className="flex justify-around lg:mr-8 cursor-pointer transition-all text-blue-500 duration-500 mx-auto   border-solid border-2 border-blue-500 pt-2 pb-2 pl-4  pr-4 w-[100%] sm:w-[300px] sm:pt-3 sm:pb-3 sm:pr-9 sm:pl-9 rounded-[30px] hover:bg-blue-500 hover:text-white hover:child:text-white ">
            <a href="">پشتیبانی: 09927821570</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
