import React, { useState, useEffect } from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import FormLogin from "../../components/formLogin/FormLogin";

export default function Login() {
  return (
    <>
      <div className="block lg:hidden">
        <Header />
      </div>
 
      <FormLogin />
      <Footer />
    </>
  );
}
