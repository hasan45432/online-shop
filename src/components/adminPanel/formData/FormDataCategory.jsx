import React, { useEffect, useState } from "react";
import Inputs from "../../inputs/Inputs";
import { useDispatch } from "react-redux";
import { createState, getStates } from "../../../Redux/store/fetchStor";
export default function FormDataCategory() {
  const [nameCategory, setNameCategory] = useState("");
  const [titleCategory, setTitleCategory] = useState("");

  const dispatch = useDispatch();

  const addNewCategory = (e) => {
    e.preventDefault();
    let body = {
      name: nameCategory,
      title: titleCategory,
    };
    let url = "http://localhost:4000/v1/category";
    dispatch(createState({ url, body }));
  };

  return (
    <>
      <div className="mt-10">
        <form>
          <div className="w-[100%] xl:w-[70%] mx-auto flex flex-col xl:flex xl:flex-rows items-center gap-4">
            <Inputs
              type={"text"}
              className={"form-control placeholder-text text-[12px]"}
              id={"inputEmail4"}
              placeholder={"نام دسته بندی محصول را وارد کنید "}
              onText={(e) => setNameCategory(e)}
            />
            <Inputs
              type={"text"}
              className={"form-control placeholder-text text-[12px]"}
              id={"inputEmail4"}
              placeholder={"توضحیات ی دسته بندی محصول را وارد کنید "}
              onText={(e) => setTitleCategory(e)}
            />
            <button
              onClick={addNewCategory}
              className="mt-2 hover:bg-neutral-400 mx-auto transition-all duration-300 rounded-[6px] hover:text-white md:ml-[230px] border pr-6 pl-6  pb-1"
            >
              افزودن
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
