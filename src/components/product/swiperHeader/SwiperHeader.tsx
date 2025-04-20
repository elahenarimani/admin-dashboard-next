"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiperHeader.css";
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
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="w-full h-full"
    >
      <SwiperSlide className="w-[413px]">
        <p className="w-full text-[16px] text-white font-semibold ">
          12-16 اردیبهشت
        </p>
        <p className="w-full text-[37px] text-white  font-black">
          نماد دقت و هنر در هر نسل
        </p>
        <p className="w-full text-[37px] text-white  font-black">CASIO</p>
        <Button className="w-[156px] h-[44px] rounded-[11px] text-white bg-[#FF8743] flex justify-center items-center pb-[5px] cursor-pointer mt-[60px]">
          خرید
        </Button>
      </SwiperSlide>
      <SwiperSlide className="w-[413px]">
        <p className="w-full text-[16px] text-white font-semibold ">
          12-16 اردیبهشت
        </p>
        <p className="w-full text-[37px] text-white  font-black">
          همراهی که خاطرات را ماندگار میکند
        </p>
        <p className="w-full text-[37px] text-white  font-black">SEIKO</p>
        <Button className="w-[156px] h-[44px] rounded-[11px] text-white bg-[#FF8743] flex justify-center items-center pb-[5px] cursor-pointer mt-[60px]">
          خرید
        </Button>
      </SwiperSlide>
      <SwiperSlide className="w-[413px]">
        <p className="w-full text-[16px] text-white font-semibold ">
          12-16 اردیبهشت
        </p>
        <p className="w-full text-[37px] text-white  font-black">
          تکنولوژی و طراحی در یک ساعت
        </p>
        <p className="w-full text-[37px] text-white  font-black">CITIZEN</p>
        <Button className="w-[156px] h-[44px] rounded-[11px] text-white bg-[#FF8743] flex justify-center items-center pb-[5px] cursor-pointer mt-[60px]">
          خرید
        </Button>
      </SwiperSlide>
      <SwiperSlide className="w-[413px]">
        <p className="w-full text-[16px] text-white font-semibold ">
          12-16 اردیبهشت
        </p>
        <p className="w-full text-[37px] text-white  font-black">
          متفاوت تر از هر ساعتی که انتظارش را دارید
        </p>
        <p className="w-full text-[37px] text-white  font-black">TIMEX</p>
        <Button className="w-[156px] h-[44px] rounded-[11px] text-white bg-[#FF8743] flex justify-center items-center pb-[5px] cursor-pointer mt-[60px]">
          خرید
        </Button>
      </SwiperSlide>
    </Swiper>
  );
};
export default SwiperHeader;
