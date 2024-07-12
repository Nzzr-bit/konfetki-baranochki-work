"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

interface Slide {
  src: string;
  alt: string;
  title: string;
  color: string;
}

interface SlickSliderProps {
  onButtonClick: (slide: Slide) => void;
}

const slides: Slide[] = [
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

function SlickSlider({ onButtonClick }: SlickSliderProps) {
  const [activeSlide, setActiveSlide] = useState<Slide>(slides[0]);

  const handleSlideChange = (swiper: any) => {
    setActiveSlide(slides[swiper.realIndex]);
  };

  return (
    <div className="relative mb-1 -mr-60">
      <Swiper
        spaceBetween={28}
        slidesPerView={4}
        loop={true}
        className="absolute right-0 top-0 w-[calc(100%+240px)]"
        modules={[Navigation]}
        onSlideChange={handleSlideChange}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prew",
        }}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`${slide.color} relative`}>
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
          </SwiperSlide>
        ))}
        <button className="swiper-button-next absolute top-1/2 right-[500px] z-10">
          <Image
            src="/IconSliderArrow.svg"
            width={50}
            height={50}
            alt="arrow"
            className=""
          />
        </button>
      </Swiper>
      <button
        className="rounded-md text-base p-button bg-main-red text-white mt-8"
        onClick={() => onButtonClick(activeSlide)}>
        Заполнить анкету
      </button>
    </div>
  );
}

export default SlickSlider;
