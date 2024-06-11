import React from "react";
import Inputs from "../../inputs/Inputs";
export default function FormData() {
  return (
    <>
      <div className=" container ">
        <div className="w-[100%] mt-10">
          <form className="flex flex-col gap-4 xl:flex 2xl:flex-row w-[100%] ">
            <div className="w-[100%] flex flex-col items-center gap-4">
              <Inputs
                type={"text"}
                className={"form-control placeholder-text text-sm"}
                id={"inputEmail4"}
                placeholder={"لطفا نام محصول را وارد کنید"}
                onUserName={(e) => setUserName(e)}
              />
              <Inputs
                type={"text"}
                className={"form-control placeholder-text text-sm"}
                id={"inputEmail4"}
                placeholder={"لطفا توضیحات محصول را وارد کنید"}
                onFirstName={(e) => setFirstName(e)}
              />
              <Inputs
                type={"text"}
                className={"form-control placeholder-text text-sm"}
                id={"inputEmail4"}
                placeholder={"لطفا url محصول  را وارد کنید"}
                onLastName={(e) => setLastName(e)}
              />
            </div>

            <div className="w-[100%] flex flex-col items-center gap-4">
              <Inputs
                type={"text"}
                className={"form-control placeholder-text text-sm"}
                id={"inputEmail4"}
                placeholder={"نحوه ی پشتبانی محصول را وارد کنید "}
                onEmail={(e) => setEmail(e)}
              />
              <Inputs
                type={"text"}
                className={"form-control placeholder-text text-sm"}
                id={"inputEmail4"}
                placeholder={"لطفا قیمت محصول را وارد کنید"}
                onPassword={(e) => setPassword(e)}
              />
              <div className="md:flex pl-28 gap-2">
                <p> انتخاب دسته بندی:</p>
                <select className="w-[120px]">
                  <option value="option1"> Option1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                </select>
              </div>
              <div className=" md:flex pr-16 md:pr-8 gap-2 mt-2">
                <p>انتخاب عکس :</p>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
