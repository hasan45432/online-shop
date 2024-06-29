import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useStore } from "react-redux";

import { useNavigate } from "react-router-dom";

export default function Product(props) {
  const dispatch = useDispatch();
  const userToken = localStorage.getItem("users");
  const navigate = useNavigate();

  const addToShoppingBasket = async (e) => {
    e.preventDefault();
    console.log("asdasd");
    let body = {
      price: props.price,
    };
    fetch(`http://localhost:4000/v1/courses/${props._id}/register`, {
      method: "POST",
      body: JSON.stringify(body),

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          swal({
            title: "محصول مورد نظر با موفقیت به سبد خرید اضافه شد",
            icon: "success",
            buttons: "ok",
          });
          console.log(res);
          return res.json();
        } else {
          swal({
            title: "این محصول در سبد خرید شما وجود دارد ",
            icon: "error",
            buttons: "ok",
          });
          console.log(res);
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        return data;
      });
      console.log(props);
  };

  return (
    <>
      <Link to={`/productsInfo/${props.shortName}`}>
        <div className=" pt-2  flex flex-col items-center h-[194px] shadow-md  m-1 hover:scale-110 transition  duration-300  truncate	 sm:h-[245px]  md:h-[280px] lg:h-[293px]  xl:h-[330px] 2xl:h-[345px] bg-white rounded-[15px]">
          <img
            src={`http://localhost:4000/courses/covers/${props.cover}`}
            alt=""
            className=" h-[100px] sm:h-[140px] md:h-[170px]  xl:h-[200px]"
          />
          <div className="flex flex-col items-center">
            <p className="text-[10px] sm:text-[15px] custom:text-14 md:text-[14px] 2xl:pt-3 lg:text-[19px]">
              {props.name}
            </p>
            <p className="text-[14px] sm:text-[15px] md:text-[14px] mt-1 lg:text-[19px] mb-2 text-orange-500">
              ${props.price}
            </p>
          </div>
          {userToken ? (
            <button
              onClick={addToShoppingBasket}
              className="border text-[12px] md:text-[18px] transition-all duration-300 md:pb-2  font-vazirBlack pr-4 hover:text-white hover:bg-neutral-400 pl-4 pb-[5px] m-1"
            >
              خرید
            </button>
          ) : (
            <Link
              to="/login"
              className="border text-[12px] md:text-[18px] transition-all duration-300 md:pb-2  font-vazirBlack pr-4 hover:text-white hover:bg-neutral-400 pl-4 pb-[5px] m-1"
            >
              خرید
            </Link>
          )}
        </div>
      </Link>
    </>
  );
}
