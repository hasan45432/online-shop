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
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
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
