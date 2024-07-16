"use client";
import React, { useState } from "react";
import SlickSlider from "./modules/SlickSlider";
import ModalInfo from "./modules/ModalInfo";
import { useModal } from "./store/ModalContext";

export const Vacancies = () => {
  const { showModal, currentModal } = useModal();
  const [activeSlide, setActiveSlide] = useState(null);

  const handleButtonClick = (slide: any) => {
    setActiveSlide(slide);
    showModal("info");
  };

  const closeModal = () => {
    showModal("null");
  };

  return (
    <div className="relative mb-28 md:mb-36 overflow-hidden container mx-auto">
      <SlickSlider onButtonClick={handleButtonClick} />

      <p className="text-xs xl:text-base pt-3 font-medium">
        Полный перечень вакансий на 
        <a href="" className="text-main-red underline">
          hh.ru
        </a>
      </p>

      {currentModal === "info" && (
        <ModalInfo slide={activeSlide} onClose={closeModal} />
      )}
    </div>
  );
};
