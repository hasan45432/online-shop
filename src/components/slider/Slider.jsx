import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination, Navigation, A11y } from "swiper";
import { Autoplay } from "swiper";
import Product from "../product/Product";
import { useDispatch, useStore } from "react-redux";
import { getStates, createState } from "../../Redux/store/fetchStor";
import "swiper/swiper-bundle.min.css";

export const Slider = () => {
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
  }, []);
  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 0,
          },

          480: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
      >
        {products.map((product) => {
          return (
            <SwiperSlide key={product._id}>
              <Product key={product._id} {...product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
