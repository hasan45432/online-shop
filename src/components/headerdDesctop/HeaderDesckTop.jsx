import React from "react";

export default function HeaderDesckTop() {
  return (
    <div>
      <header className="fixed z-50 hidden md:flex backdrop-blur-[6px]  text-lg bg-neutral-200 w-[90%] shadow-xl right-0 left-0 mx-auto items-center mt-8 justify-between rounded-2xl h-20">
        <nav className="flex gap-5 items-center mr-5">
          <div></div>
          <ul className="flex gap-3  child:text-[19px]  text-black/60 font-vazirBlack child-hover:text-blue-500 child:transition-colors duration-300">
            <li>
              <a href="#" className=" ">
                صفحه اصلی
              </a>
            </li>
            <li className="">
              <a href="#"> فروشگاه </a>
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
          <div className="flex gap-2 child-hover:text-blue-200 child-hover:transition-all child-hover:duration-300">
            <img
              className="w-8 filter invert cursor-pointer"
              src="./CoffeeShop-Files//icons/icons8-login-24.png"
              alt=""
            />
            <a className="hidden lg:block font-vazirBold text-black/60" href="">
              ورود
            </a>
            <p className=" w-[30px] h-[1px] bg-black/60  rotate-90 mt-3"></p>
            <a
              className="hidden lg:block font-vazirBold text-black/60  "
              href=""
            >
              ثبت نام
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
