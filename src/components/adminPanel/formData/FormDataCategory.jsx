import React, { useState } from "react";
import Inputs from "../../inputs/Inputs";
export default function FormDataCategory() {
  const [nameCategory, setNameCategory] = useState("");
  const [titleCategory, setTitleCategory] = useState("");

  return (
    <>
      <div className="mt-10">
        <form className="flex flex-col gap-4 xl:flex 2xl:flex-row w-[100%]">
          <div className="w-[50%] mx-auto flex flex-col items-center gap-4">
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
          </div>
        </form>
      </div>
    </>
  );
}
