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
        className={`w-[640px] ${
          isClosing ? "slide-out-right" : "slide-in-right"
        }`}
        onClick={(e) => e.stopPropagation()}>
        <div className="bg-white h-[100vh]">
          <div className={`${slide.color} relative`}>
            <h4 className="text-lg1 font-bold absolute left-8 top-24 w-44">
              {slide.title}
            </h4>
            <button onClick={handleClose} className="absolute left-8 top-14">
              <Image src="/ModalClose.svg" width={50} height={3} alt="arrow" />
            </button>
            <Image
              src={slide.src}
              width={320}
              height={320}
              alt={slide.alt}
              className="ml-72 pt-10"
            />
          </div>
          <div className="grid justify-center mt-4">
            <div>Вы открыли вакансию {slide.title}</div>
            <button
              onClick={handleShowModal}
              className="rounded-md text-base py-4 px-52 bg-black text-white mt-8">
              Заполнить анкету
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;
