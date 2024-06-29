import React, { useEffect, useState } from "react";
import HeaderDesckTop from "../../components/headerdDesctop/HeaderDesckTop";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useDispatch, useStore } from "react-redux";
import { getStates } from "../../Redux/store/fetchStor";
import FormRegister from "../../components/formRegister/FormRegister";

export default function Register() {
  const [user, setUser] = useState("");

  

  return (
    <>
      <div className="block lg:hidden">
        <Header />
      </div>
      <div className=" hidden lg:block">
        <HeaderDesckTop  />
      </div>
      <FormRegister />

      <Footer />
    </>
  );
}
