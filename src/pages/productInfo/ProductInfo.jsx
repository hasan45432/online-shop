import React from "react";
import HeaderDesckTop from "../../components/headerdDesctop/HeaderDesckTop";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProductInfoBox from "../../components/productInfoBox/ProductInfoBox";

export default function ProductInfo() {
  return (
    <>
      <div className="block lg:hidden">
        <Header />
      </div>
      <div className=" hidden lg:block">
        <HeaderDesckTop />
      </div>
      <ProductInfoBox />

      <Footer />
    </>
  );
}
