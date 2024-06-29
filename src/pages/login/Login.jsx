import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import FormLogin from "../../components/formLogin/FormLogin";
import HeaderDesckTop from "../../components/headerdDesctop/HeaderDesckTop";
export default function Login() {
  return (
    <>
      <div className="block lg:hidden">
        <Header />
      </div>
      <div>
        <HeaderDesckTop />
      </div>
      <FormLogin />
      <Footer />
    </>
  );
}
