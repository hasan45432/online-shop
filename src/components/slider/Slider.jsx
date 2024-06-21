import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination, Navigation, A11y } from "swiper";
import { Autoplay } from "swiper";

import "swiper/swiper-bundle.min.css";

export const Slider = ({ slides }) => {
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
        <SwiperSlide>{slides}</SwiperSlide>
        <SwiperSlide>{slides}</SwiperSlide>
        <SwiperSlide>{slides}</SwiperSlide>
        <SwiperSlide>{slides} </SwiperSlide>
        <SwiperSlide>{slides}</SwiperSlide>
        <SwiperSlide>{slides}</SwiperSlide>
        <SwiperSlide>{slides} </SwiperSlide>
        <SwiperSlide>{slides} </SwiperSlide>
        <SwiperSlide>{slides}</SwiperSlide>
        <SwiperSlide>{slides} </SwiperSlide>
        <SwiperSlide>{slides} </SwiperSlide>
      </Swiper>
    </>
  );
};
