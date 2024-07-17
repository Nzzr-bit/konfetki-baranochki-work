"use client";
import Image from "next/image";
import React, { lazy, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
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
    src: "./VacancyConf.png",
    alt: "кондитерское дело",
    title: "кондитерское дело",
    color: "bg-lime-100",
  },
  {
    src: "./VacancyClient.png",
    alt: "специалисты клиентского сервиса",
    title: "специалисты клиентского сервиса",
    color: "bg-rose-100",
  },
  {
    src: "./VacancyWorker.png",
    alt: "Сотрудник кулинарии",
    title: "сотрудники кулинарии",
    color: "bg-teal-100",
  },
  {
    src: "./VacancyOffice.png",
    alt: "сотрудники офиса",
    title: "сотрудники офиса",
    color: "bg-pink-100",
  },
  {
    src: "./VacancyChief.png",
    alt: "Повар",
    title: "повар",
    color: "bg-yellow-100",
  },
  {
    src: "./VacancyDeliver.png",
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
    <div className=" mb-1">
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          1400: {
            spaceBetween: 28,
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 4,
          },
          600: {
            slidesPerView: 2,
          },
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-auto lg:w-[calc(100vw+10%)]"
        modules={[Navigation, Autoplay]}
        onSlideChange={handleSlideChange}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prew",
        }}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`${slide.color} relative rounded-lg`}>
              <Image
                src={slide.src}
                width={460}
                height={460}
                alt={slide.alt}
                className="pt-28 lg:pt-32 xl:pt-36"
              />
              <h4 className="absolute top-6 left-6 xl:top-10 xl:left-9 text-m font-bold">
                {slide.title}
              </h4>
            </div>
          </SwiperSlide>
        ))}
        <button className="swiper-button-next absolute top-1/2 left-[88%] lg:left-[78%] xxl:left-[72%] z-10">
          <Image
            src="./iconSliderArrow.svg"
            width={50}
            height={50}
            alt="arrow"
          />
        </button>
      </Swiper>
      <button
        className="rounded-md text-xs xl:text-s py-3 w-full lg:w-auto lg:px-16 xl:px-24 xxl:p-button bg-main-red text-white mt-8 font-semibold"
        onClick={() => onButtonClick(activeSlide)}>
        Заполнить анкету
      </button>
    </div>
  );
}

export default SlickSlider;
