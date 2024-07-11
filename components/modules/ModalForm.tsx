"use client";
import Image from "next/image";
import React from "react";
import { useModal } from "../store/ModalContext";

export const ModalForm: React.FC = () => {
  const { isModalVisible, hideModal } = useModal();

  if (!isModalVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 z-50 flex justify-end items-center">
      <div className="w-[840px]">
        <div className="bg-white py-[50vh] relative">
          <button onClick={hideModal} className="absolute top-24 ml-16">
            <Image src="/ModalClose.svg" width={44} height={2} alt="arrow" />
          </button>
          <div className="flex justify-center">
            <div>123123</div>
          </div>
        </div>
      </div>
    </div>
  );
};
