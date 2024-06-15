import React from "react";
import Inputs from "../../inputs/Inputs";
export default function FormDataCategory() {
  return (
    <>
      <div className="mt-10">
        <form className="flex flex-col gap-4 xl:flex 2xl:flex-row w-[100%]">
          <div className="w-[100%] flex flex-col items-center gap-4">
            <Inputs
              type={"text"}
              className={"form-control placeholder-text text-[12px]"}
              id={"inputEmail4"}
              placeholder={"لطفا نام دسته بندی محصول را وارد کنید"}
              onUserName={(e) => setName(e)}
            />
            <Inputs
              type={"text"}
              className={"form-control placeholder-text text-[12px]"}
              id={"inputEmail4"}
              placeholder={"لطفا توضیحات دسته بندی  را وارد کنید"}
              onFirstName={(e) => setDescription(e)}
            />
          </div>
        </form>
      </div>
    </>
  );
}
