import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useStore } from "react-redux";
import { addProductToUserBasket } from "../../Redux/store/ShoppingBasket";

export default function Product(props) {
  const dispatch = useDispatch();

  const addToShoppingBasket = async (e) => {
    e.preventDefault();

    let body = {
      price: props.price,
    };
    let url = `http://localhost:4000/v1/courses/${props._id}/register`;
    await dispatch(addProductToUserBasket({ url, body }));
  };

  return (
    <>
      <Link to={`/productsInfo/${props.shortName}`}>
        <div className="  p-4 flex flex-col items-center h-[190px] shadow-md  m-1 hover:scale-110 transition  duration-300  truncate	 sm:h-[300px]  md:h-[270px]   xl:h-[330px] 2xl:h-[383px] bg-white rounded-[15px]">
          <img
            src={`http://localhost:4000/courses/covers/${props.cover}`}
            alt=""
            className=" h-[100px] sm:h-[200px] md:h-[170px] xl:h-[230px]"
          />
          <div className="flex flex-col items-center">
            <p className="text-[10px] sm:text-[15px] custom:text-14 md:text-[14px] 2xl:pt-3 lg:text-[19px]">
              {props.name}
            </p>
            <p className="text-[14px] sm:text-[15px] md:text-[14px] mt-1 lg:text-[19px] mb-2 text-orange-500">
              ${props.price}
            </p>
          </div>
          <button
            onClick={addToShoppingBasket}
            className="border pr-4 hover:text-white hover:bg-neutral-400 pl-4 pb-1 m-1"
          >
            خرید
          </button>
        </div>
      </Link>
    </>
  );
}
