import React, { useState, useEffect } from "react";
import HeaderDesckTop from "../../components/headerdDesctop/HeaderDesckTop";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Product from "../../components/product/Product";
import { getStates, createState } from "../../Redux/store/fetchStor";
import { useDispatch, useStore } from "react-redux";

export default function Products() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const store = useStore();

  const fetchAllProduct = async () => {
    let url = "http://localhost:4000/v1/courses";
    await dispatch(getStates({ url }));

    let productStore = store.getState().fetchStor;
    setProducts(productStore);
  };

  useEffect(() => {
    fetchAllProduct();
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="block lg:hidden">
        <Header />
      </div>
      <div className=" hidden lg:block">
        <HeaderDesckTop />
      </div>
      <div className=" container">
        <div className="grid  sm:mr-[50px] sm:ml-[50px]  lg:mr-[90px] lg:ml-[90px] xl:mr-[130px] xl:ml-[130px] grid-cols-2  xl:gap-4  md:gap-3 sm:gap-2 sm:p-2 md:grid-cols-3 xl:grid-cols-4 mt-20 mb-4  ">
          {products.map((product) => {
            return <Product key={product._id} {...product} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
