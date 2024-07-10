"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

const slides = [
  {
    src: "/VacancyConf.png",
    alt: "кондитерское дело",
    title: "кондитерское дело",
    color: "bg-lime-100",
  },
  {
    src: "/VacancyClient.png",
    alt: "специалисты клиентского сервиса",
    title: "специалисты клиентского сервиса",
    color: "bg-rose-100",
  },
  {
    src: "/VacancyWorker.png",
    alt: "Сотрудник кулинарии",
    title: "сотрудники кулинарии",
    color: "bg-teal-100",
  },
  {
    src: "/VacancyOffice.png",
    alt: "сотрудники офиса",
    title: "сотрудники офиса",
    color: "bg-pink-100",
  },
  {
    src: "/VacancyChief.png",
    alt: "Повар",
    title: "повар",
    color: "bg-yellow-100",
  },
  {
    src: "/VacancyDeliver.png",
    alt: "Вакансии доставки",
    title: "вакансии доставки",
    color: "bg-fuchsia-100",
  },
];

function SlickSlider() {
  return (
    <div className="relative mb-12  -mr-60  overflow-hidden">
      <Swiper
        spaceBetween={28}
        slidesPerView={4}
        loop={true}
        className=""
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prew",
        }}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={`${
                  slide.color
                } relative transition-transform duration-300 ease-in-out transform ${
                  isActive ? "scale-105" : "scale-90"
                }`}>
                <Image
                  src={slide.src}
                  width={460}
                  height={640}
                  alt={slide.alt}
                  className="pt-28"
                />
                <h4 className="absolute top-10 left-9 text-m font-bold">
                  {slide.title}
                </h4>
              </div>
            )}
          </SwiperSlide>
        ))}
        <button className="swiper-button-next absolute top-1/2 left-3/4 z-10 ">
          <Image
            src="/IconSliderArrow.svg"
            width={48}
            height={48}
            alt="arrow"
            className=""
          />
        </button>
      </Swiper>
    </div>
  );
}

export default SlickSlider;
