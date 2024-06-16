import React, { useEffect, useState } from "react";
import { useDispatch, useStore } from "react-redux";
import Inputs from "../../inputs/Inputs";
import { createState, getStates } from "../../../Redux/store/fetchStor";

const FormDataProduct = () => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [support, setSupport] = useState("");
  const [cover, setCover] = useState("");
  const [categoryID, setCategoryID] = useState("");
  const shortName = "bootstrap";
  const status = "start";

  const stor = useStore();
  const dispatch = useDispatch();
  const addNewProduct = async (event) => {
    event.preventDefault();
    const localStorageData = JSON.parse(localStorage.getItem("admin"));
    let newFormData = new FormData();
  };

  useEffect(() => {
    let url = "http://localhost:4000/v1/category";
    dispatch(getStates({ url }));
    let getCategory = stor;

    console.log(getCategory);
  }, []);

  return (
    <>
      <div className=" container ">
        <div className="w-[100%] mt-10">
          <form className="flex flex-col gap-4 xl:flex 2xl:flex-row w-[100%] ">
            <div className="w-[100%] flex flex-col items-center gap-4">
              <Inputs
                type={"text"}
                className={"form-control placeholder-text text-[12px]"}
                id={"inputEmail4"}
                placeholder={"لطفا نام محصول را وارد کنید"}
                onText={(e) => setName(e)}
              />
              <Inputs
                type={"text"}
                className={"form-control placeholder-text text-[12px]"}
                id={"inputEmail4"}
                placeholder={"لطفا توضیحات محصول را وارد کنید"}
                onText={(e) => setDescription(e)}
              />
            </div>

            <div className="w-[100%] flex flex-col items-center  gap-4">
              <Inputs
                type={"text"}
                className={"form-control placeholder-text text-[12px]"}
                id={"inputEmail4"}
                placeholder={"نحوه ی پشتبانی محصول را وارد کنید "}
                onText={(e) => setSupport(e)}
              />
              <Inputs
                type={"number"}
                className={"form-control placeholder-text text-[12px]"}
                id={"inputEmail4"}
                placeholder={"لطفا قیمت محصول را وارد کنید"}
                onText={(e) => setPrice(e)}
              />
              <div className="md:flex pl-20 gap-2">
                <p> انتخاب دسته بندی:</p>
                <select
                  className="w-[120px]"
                  onChange={(e) => setCategoryID(e.target.value)}
                >
                  <option value="برنامه نویس فرانت اند">
                    برنامه نویس فرانت اند
                  </option>
                  <option value="optionasdasdasd">برنامه نویس بک اند </option>
                  <option value="optionasdasdasd">برنامه نویس فلاتر</option>
                  <option value="optionasdasdasd">پایتون</option>
                </select>
              </div>
              <div className="md:flex pr-16  gap-2 mt-2">
                <p>انتخاب عکس :</p>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={(e) => setCover(e.target.files[0])}
                ></input>
              </div>
              <button
                onClick={addNewProduct}
                className="mt-2 hover:bg-neutral-400 transition-all duration-300 rounded-[6px] hover:text-white md:ml-[230px] border pr-6 pl-6  pb-1"
              >
                افزودن
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormDataProduct;