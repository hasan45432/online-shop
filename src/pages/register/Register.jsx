import React from "react";
import HeaderDesckTop from "../../components/headerdDesctop/HeaderDesckTop";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import FormRegister from "../../components/formRegister/FormRegister";

export default function Register() {
 
  return (
    <>
      <div className="block lg:hidden">
        <Header />
      </div>
      <div className=" hidden lg:block">
        <HeaderDesckTop />
      </div>
      <FormRegister />

      <Footer />
    </>
  );
}
