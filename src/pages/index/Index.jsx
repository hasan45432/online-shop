import React from "react";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import HeaderDesckTop from "../../components/headerdDesctop/HeaderDesckTop";
export default function Index() {
  return (
    <>
      <div>
        <div className="block lg:hidden">
          <Header />
        </div>
        <div className=" hidden lg:block">
          <HeaderDesckTop />
        </div>

        <Main />
      </div>
    </>
  );
}
