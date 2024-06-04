import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const Slider = ({ slides }) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>{slides}</SwiperSlide>
        <SwiperSlide>{slides}</SwiperSlide>
        <SwiperSlide>{slides}</SwiperSlide>
        <SwiperSlide>{slides}</SwiperSlide>
        <SwiperSlide>{slides}</SwiperSlide>
      </Swiper>
    </>
  );
};