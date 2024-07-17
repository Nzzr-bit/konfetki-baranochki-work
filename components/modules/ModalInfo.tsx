"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useModal } from "../store/ModalContext";

interface Slide {
  src: string;
  alt: string;
  title: string;
  color: string;
}

interface ModalInfoProps {
  slide: Slide | null;
  onClose: () => void;
}

export const ModalInfo = ({ slide, onClose }: ModalInfoProps) => {
  const { currentModal, showModal, hideModal } = useModal();
  const [isClosing, setIsClosing] = useState(false);

  if (!slide || (currentModal !== "info" && !isClosing)) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      hideModal();
      setIsClosing(false);
    }, 300);
  };

  const handleShowModal = () => {
    handleClose();
    setTimeout(() => {
      showModal("form");
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-25 z-20 flex justify-end overflow-y-auto ${
        isClosing ? "pointer-events-none" : ""
      }`}
      onClick={handleClose}>
      <div
        className={`w-full sm:w-3/4 md:w-2/3 lg:w-[640px] ${
          isClosing ? "slide-out-right" : "slide-in-right"
        }`}
        onClick={(e) => e.stopPropagation()}>
        <div className="bg-white h-full">
          <div className={`${slide.color} relative pt-10`}>
            <h4 className="text-ml lg:text-lg1 font-bold absolute left-1 top-10 sm:left-4 sm:top-16 lg:left-8 lg:top-24 w-44">
              {slide.title}
            </h4>
            <button
              className="absolute left-4 top-4 sm:left-8 sm:top-10 z-30"
              onClick={handleClose}>
              <Image src="./ModalClose.svg" width={50} height={3} alt="arrow" />
            </button>
            <div className="relative h-64 sm:h-80">
              <Image
                src={slide.src}
                width={320}
                height={320}
                alt={slide.alt}
                className="absolute right-0 top-0 w-52 sm:w-64 lg:w-80 h-full object-cover"
              />
            </div>
          </div>
          <div className="grid justify-center mt-4 mx-4">
            <div>Вы открыли вакансию {slide.title}</div>
            <button
              onClick={handleShowModal}
              className="rounded-md text-xs xl:text-s py-3 w-full lg:w-auto lg:p-button bg-black text-white mt-8">
              Заполнить анкету
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;
