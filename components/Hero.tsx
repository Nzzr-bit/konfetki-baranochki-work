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
    <div className="container mx-auto lg:flex mt-10 lg:gap-x-8 mb-28 lg:mb-36 xl:mb-52 items-start">
      <div className="">
        <h1 className="text-lg1 md:text-lg xl:text-xl  font-bold">
          Айда к нам! мы готовим <span className="text-main-red">успех,</span>{" "}
          выпекаем <span className="text-main-red">возможности!</span>
        </h1>
        <p className="text-xs xl:text-base my-3 md:my-4">
          {`Приглашаем на работу в любимую сеть кулинарий "Конфетки-
          Бараночки!" Это бренд с многолетней историей, который успело
          полюбить не одно поколение! Сохраняем традиции с 1956г. и динамично
          развиваемся с заботой о вас!`}
        </p>
        <button
          className="rounded-md text-xs xl:text-s py-3 w-full lg:w-auto lg:p-button bg-black text-white font-semibold"
          onClick={handleShowModal}>
          Заполнить анкету
        </button>
      </div>
      <Image
        src="./hero.png"
        width={704}
        height={440}
        loading="lazy"
        alt="Айда к нам!"
        className="object-contain w-full mt-6 md:mt-6 lg:mt-0 relative lg:h-64 xl:h-auto "
      />
    </div>
  );
};
