"use client";
import Image from "next/image";
import React from "react";
import { useModal } from "./store/ModalContext";

export const Hero = () => {
  const { showModal } = useModal();

  const handleShowModal = () => {
    showModal("form");
  };

  return (
    <div className="container mx-auto flex mt-10 gap-x-8 mb-36 items-start">
      <div className="">
        <h1 className="text-xl font-bold">
          Айда к нам! мы готовим <span className="text-main-red">успех,</span>{" "}
          выпекаем <span className="text-main-red">возможности!</span>
        </h1>
        <p className="text-base my-4">
          {`Приглашаем на работу в любимую сеть кулинарий "Конфетки-
          Бараночки!" Это бренд с многолетней историей, который успело
          полюбить не одно поколение! Сохраняем традиции с 1956г. и динамично
          развиваемся с заботой о вас!`}
        </p>
        <button
          onClick={handleShowModal}
          className="rounded-md text-base p-button bg-black text-white">
          Заполнить анкету
        </button>
      </div>
      <Image
        src="/hero.png"
        width={704}
        height={440}
        loading="lazy"
        alt="Айда к нам!"
        className="object-contain"
      />
    </div>
  );
};
