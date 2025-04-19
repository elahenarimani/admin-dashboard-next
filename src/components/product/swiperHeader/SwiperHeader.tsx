"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiperHeader.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Button from "../../button/Button";
const SwiperHeader = () => {
  return (
    
     
      <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        //   pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="w-full h-full"
      >
        <SwiperSlide className="w-full h-full">Slide 1</SwiperSlide>
        <SwiperSlide className="w-full h-full">Slide 2</SwiperSlide>
        <SwiperSlide className="w-full h-full">Slide 3</SwiperSlide>
        <SwiperSlide className="w-full h-full">Slide 4</SwiperSlide>
      </Swiper>
   
  );
};

export default SwiperHeader;
