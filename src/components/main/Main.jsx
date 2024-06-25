import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import { Slider } from "../slider/Slider";
import Article from "../articles/Article";
import { useDispatch, useStore } from "react-redux";
import { getStates, createState } from "../../Redux/store/fetchStor";
import { SliderHeader } from "../sliderHeader/SliderHeader";
import { Link } from "react-router-dom";

export default function Main() {
  const [products, setProducts] = useState([]);
  const [articles, setArticles] = useState([]);

  const dispatch = useDispatch();
  const store = useStore();

  const fetchAllProduct = async () => {
    let url = "http://localhost:4000/v1/courses";
    await dispatch(getStates({ url }));

    let productStore = store.getState().fetchStor;
    setProducts(productStore);
  };

  const fetchAllArticle = async () => {
    let url = "http://localhost:4000/v1/articles";
    await dispatch(getStates({ url }));

    let articleStore = store.getState().fetchStor;
    setArticles(articleStore);
  };

  useEffect(() => {
    fetchAllProduct();
    fetchAllArticle();
  }, []);
  return (
    <>
      <div>
        <div>
          <SliderHeader />
        </div>
        <div className=" container mx-auto">
          <div className="flex flex-col items-center ">
            <h2 className="text-center text-[35px] md:text-[70px] mt-[30px] ">
              NEW ARRIVAL
            </h2>
            <p className=" w-[180px] md:w-[260px]  h-[1px] bg-line mt-4 mb-4"></p>
          </div>
          {console.log(products)}
          <div className="grid sm:mr-[70px] sm:ml-[70px] md:mr-[30px] md:ml-[30px] lg:mr-[110px] lg:ml-[110px] xl:mr-[110px] xl:ml-[110px] grid-cols-2  xl:gap-4  md:gap-3 sm:gap-2 sm:p-2 md:grid-cols-3 xl:grid-cols-4 mt-4 mb-4">
            {products.slice(7, 19).map((product) => {
              return <Product key={product._id} {...product} />;
            })}
          </div>

          <div className=" text-center mb-10 mt-8 ">
            <Link
              to="/products"
              className="pr-[30px] text-[13px] pb-2  pl-[30px] sm:text-[20px] sm:pr-[40px] sm:pl-[40px] hover:text-white hover:bg-neutral-400 pt-1 transition-all duration-300  border  md:pr-[120px] md:pl-[120px] md:pt-2 md:pb-2  text-2xl "
            >
              تمام محصولات
            </Link>
          </div>
        </div>
        <div className=" container ">
          <div className="sm:mr-[50px] sm:ml-[50px] lg:mr-[90px] lg:ml-[90px] xl:mr-[130px] xl:ml-[130px] mt-[70px]">
            <div className="mt-10 ">
              <h2 className=" text-center text-4xl md:text-5xl text-black ">
                just for you
              </h2>
              <p className="mx-auto  w-[120px] md:w-[200px]  h-[1px] bg-line mt-4 mb-4"></p>
            </div>
            <Slider />
          </div>
          <div className="mt-[70px]">
            <div>
              <h2 className="text-center text-[30px] md:text-[60px] mt-[30px]">
                Articles
              </h2>
              <p className=" w-[180px] md:w-[260px] mx-auto h-[1px] bg-line mt-2 mb-4"></p>
            </div>
            <div className="grid sm:mr-[50px] sm:ml-[50px]  lg:mr-[90px] lg:ml-[90px] xl:mr-[130px] xl:ml-[130px]  xl:gap-4  md:gap-3 sm:gap-2 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {console.log(articles)}
              {articles.map((article) => {
                return <Article key={article._id} {...article} />;
              })}
              <div>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
