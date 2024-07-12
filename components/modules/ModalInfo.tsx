"use client";
import Image from "next/image";
import React from "react";
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
  const { showModal } = useModal();
  if (!slide) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 z-20 flex justify-end items-center"
      onClick={onClose}>
      <div className="w-[540px]" onClick={(e) => e.stopPropagation()}>
        <div className="bg-white py-[50vh] relative">
          <button onClick={onClose} className=" right-4">
            <Image src="/ModalClose.svg" width={44} height={2} alt="arrow" />
          </button>
          <div className={`grid mx- ${slide.color}`}>
            <h4 className="text-ml font-bold mb-5">{slide.title}</h4>
            <Image
              src={slide.src}
              width={340}
              height={440}
              alt={slide.alt}
              className="pt-9 pl-24"
            />
            <button
              onClick={showModal}
              className="rounded-md text-base p-button bg-black text-white mt-8">
              Заполнить анкету
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;
