import React, { useEffect } from "react";

import { useDispatch, useStore } from "react-redux";

export default function UserProduct(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(props.course);
  }, [props]);

  const completeShop = (e) => {
    e.preventDefault();
    swal({
      title: "این سایت صرفا یک نمونه کار است و هیچ محصول فیزیکی وجود ندارد",
      icon: "success",
      buttons: "ok",
    });
  };

  const removeProduct = (e) => {
    e.preventDefault();

    swal({
      title:
        "به دلیل ناقص بودن  backend امکان حذف دوره از سبد خرید توسط کاربر وجود ندارد ",
      icon: "warning",
      buttons: "ok",
    });
  };
  return (
    <>
      <div className="">
        <div className="  pt-2 flex flex-col items-center h-[230px] shadow-md  m-1 hover:scale-110 transition  duration-300  truncate	 sm:h-[310px]  md:h-[317px] lg:h-[340px]   xl:h-[345px] 2xl:h-[410px] bg-white rounded-[15px]">
          <img
            src={`http://localhost:4000/courses/covers/${props.course.cover}`}
            alt=""
            className=" h-[100px] sm:h-[150px] md:h-[170px] xl:h-[230px]"
          />
          <div className="flex flex-col items-center">
            <p className="text-[10px] sm:text-[15px] custom:text-14 md:text-[14px] 2xl:pt-3 lg:text-[19px]">
              {props.course.name}
            </p>
            <p className="text-[14px] sm:text-[15px] md:text-[14px] mt-1 lg:text-[19px] mb-2 text-orange-500">
              ${props.course.price}
            </p>
          </div>
          <button
            onClick={completeShop}
            className="pr-3 pl-3 text-[13px] pb-1 border sm:pr-4 hover:text-white hover:bg-neutral-400 sm:pl-4 sm:pb-1 m-1"
          >
            تکمیل خرید
          </button>
          <button
            onClick={removeProduct}
            className="pr-3 pl-3 text-[13px] pb-1 border sm:pr-4 hover:text-white hover:bg-neutral-400 sm:pl-4 sm:pb-1 m-1"
          >
            حذف
          </button>
        </div>
      </div>
    </>
  );
}
