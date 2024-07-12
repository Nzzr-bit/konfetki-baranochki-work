"use client";
import React, { useState } from "react";
import SlickSlider from "./modules/SlickSlider";
import ModalInfo from "./modules/ModalInfo";

export function Vacancies() {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(null);

  const handleButtonClick = (slide: any) => {
    setActiveSlide(slide);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="relative mb-36 overflow-hidden container mx-auto">
      <SlickSlider onButtonClick={handleButtonClick} />

      <p className="text-base pt-3 font-medium">
        Полный перечень вакансий на
        <a href="" className="text-main-red underline">
          hh.ru
        </a>
      </p>

      {modalVisible && <ModalInfo slide={activeSlide} onClose={closeModal} />}
    </div>
  );
}
