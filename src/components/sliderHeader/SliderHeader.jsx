import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade,Scrollbar, Pagination, Navigation, A11y } from "swiper";
import { Autoplay } from "swiper";

import "swiper/swiper-bundle.min.css";

export const SliderHeader = ({ image }) => {
  return (
    <>
      <Swiper
        modules={[Navigation,EffectFade, Autoplay, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/9c44c1db73014e9088018f1f51e04ce8e31dfb7c_1717238694.gif?x-oss-process=image"
            alt=""
            className="xl:h-[900px]  w-[100%]  sm:h-[600px] h-[300px]  sm:w-[100%]  bg-center bg-cover z-40"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../public/img/f559d0e47d996ed2b1cec0c3afada4d7efb191c3_1717268684.jpg"
            alt=""
            className="xl:h-[900px]  w-[100%]  sm:h-[600px] h-[300px]  sm:w-[100%]  bg-center bg-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../public/img/b81e775d52f10d6b5b8838ff77b18688e7586fee_1717268194.jpg"
            alt=""
            className="xl:h-[900px]  w-[100%]  sm:h-[600px] h-[300px]  sm:w-[100%]  bg-center bg-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../public/img/451a5180128f7ab5d02526ab3b3c3bc7b40b2605_1704202611.jpg"
            alt=""
            className="xl:h-[900px]  w-[100%]  sm:h-[600px] h-[300px]  sm:w-[100%]  bg-center bg-cover"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
