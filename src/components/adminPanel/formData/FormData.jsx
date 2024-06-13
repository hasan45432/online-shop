import React, { useEffect, useState } from "react";
import Inputs from "../../inputs/Inputs";
import { useDispatch, useStore } from "react-redux";
import { getStates, createState } from "../../../Redux/store/fetchStor";
export default function FormData() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [support, setSupport] = useState("");
  const [cover, setCover] = useState("");
  const [categoryID, setCategoryID] = useState("");

  const dispatch = useDispatch();

  const addNewProduct = (e) => {
    e.preventDefault();
    let body = {
      name,
      description,
      price,
      support,
      cover,
      categoryID,
    };
    dispatch(createState("http://localhost:4000/v1/auth/login"));
  };

  useEffect(() => {
    const adminPanel = JSON.parse(localStorage.getItem("admin"));
    console.log(adminPanel);
    fetch("http://localhost:4000/v1/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${adminPanel}`,
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      });
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
                onUserName={(e) => setName(e)}
              />
              <Inputs
                type={"text"}
                className={"form-control placeholder-text text-[12px]"}
                id={"inputEmail4"}
                placeholder={"لطفا توضیحات محصول را وارد کنید"}
                onFirstName={(e) => setDescription(e)}
              />
            </div>

            <div className="w-[100%] flex flex-col items-center  gap-4">
              <Inputs
                type={"text"}
                className={"form-control placeholder-text text-[12px]"}
                id={"inputEmail4"}
                placeholder={"نحوه ی پشتبانی محصول را وارد کنید "}
                onEmail={(e) => setSupport(e)}
              />
              <Inputs
                type={"text"}
                className={"form-control placeholder-text text-[12px]"}
                id={"inputEmail4"}
                placeholder={"لطفا قیمت محصول را وارد کنید"}
                onPassword={(e) => setPrice(e)}
              />
              <div className="md:flex pl-20 gap-2">
                <p> انتخاب دسته بندی:</p>
                <select
                  className="w-[120px]"
                  onChange={(e) => setCategoryID(e.target.value)}
                >
                  <option value="option1"> Option1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                </select>
              </div>
              <div className="md:flex pr-16  gap-2 mt-2">
                <p>انتخاب عکس :</p>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={(e) => setCover(e.target.files)}
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
}
