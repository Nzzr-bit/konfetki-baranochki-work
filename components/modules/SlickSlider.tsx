"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function SlickSlider() {
  return (
    <div className=" mb-12 ">
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        className=""
        modules={[Pagination, Navigation]}>
        <SwiperSlide>
          <div className="bg-ultra-light-grey ">
            <Image
              src="/Chief.png"
              width={460}
              height={640}
              alt="Повар"
              className="pt-28"
            />
            <h4 className="absolute top-10 left-10 text-ml font-bold">повар</h4>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-ultra-light-grey ">
            <Image
              src="/Chief.png"
              width={460}
              height={640}
              alt="Повар"
              className="pt-28"
            />
            <h4 className="absolute top-10 left-10 text-ml font-bold">
              специалисты клиентского сервиса
            </h4>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-ultra-light-grey ">
            <Image
              src="/Chief.png"
              width={460}
              height={640}
              alt="Повар"
              className="pt-28"
            />
            <h4 className="absolute top-10 left-10 text-ml font-bold">повар</h4>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-ultra-light-grey ">
            <Image
              src="/Chief.png"
              width={460}
              height={640}
              alt="Повар"
              className="pt-28"
            />
            <h4 className="absolute top-10 left-10 text-ml font-bold">повар</h4>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-ultra-light-grey ">
            <Image
              src="/Chief.png"
              width={460}
              height={640}
              alt="Повар"
              className="pt-28"
            />
            <h4 className="absolute top-10 left-10 text-ml font-bold">повар</h4>
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SlickSlider;
