"use client";
import Image from "next/image";
import React from "react";
import { useModal } from "./store/ModalContext";

export const WhyUs = () => {
  const { showModal } = useModal();

  const handleShowModal = () => {
    showModal("form");
  };

  return (
    <div className="container mx-auto mb-28 md:mb-36 px-4">
      <h2 className="text-lg xl:text-xl font-bold mb-5 xl:mb-14">
        почему с нами
      </h2>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-20 xl:gap-y-10">
        <div>
          <h3 className="text-ml xl:text-lg font-semibold italic mb-6">
            Наша главная <br />
            ценность – люди. 
          </h3>
          <p className="text-xs xl:text-s mb-6 font-medium">
            В кулинариях Конфетки-бараночки мы верим, что душевность и
            внимательность к каждому человеку — основа нашей жизни. Мы создаем
            атмосферу, где каждый гость чувствует себя уютно, а каждая встреча с
            нашими блюдами становится настоящим праздником.
          </p>
          <p className="text-xs xl:text-s  mb-6 font-medium">
            Присоединяйся к нашей команде, развивайся вместе с нами, будь
            успешным. Мы ищем людей, готовых делиться своей душевностью и
            профессионализмом, чтобы каждый день делать мир немного вкуснее и
            радостнее.
          </p>
        </div>
        <div>
          <div className="flex mb-16 items-start">
            <Image
              src="./WhyUsIcon2.svg"
              width={72}
              height={72}
              loading="lazy"
              alt="люди"
              className="object-contain mr-4"
            />
            <div>
              <h3 className="text-m font-bold mb-2">люди</h3>
              <p className="text-xs xl:text-base font-medium xl:w-4/5">
                Для нас важно что бы гость ощущал комфорт и любовь.
              </p>
            </div>
          </div>
          <div className="flex mb-16 items-start">
            <Image
              src="./WhyUsIcon1.svg"
              width={72}
              height={72}
              loading="lazy"
              alt="делать лучше"
              className="object-contain mr-4"
            />
            <div>
              <h3 className="text-m font-bold mb-2">делать лучше</h3>
              <p className="text-xs xl:text-base font-medium xl:w-4/5">
                Мы профессионалы и для нас важно всегда двигаться вперед.
              </p>
            </div>
          </div>
          <div className="flex mb-5 items-start">
            <Image
              src="./WhyUsIcon3.svg"
              width={72}
              height={72}
              loading="lazy"
              alt="доверие"
              className="object-contain mr-4"
            />
            <div>
              <h3 className="text-m font-bold mb-2">доверие</h3>
              <p className="text-xs xl:text-base font-medium xl:w-4/5">
                Мы используем только качественные ингредиенты от местных
                Волгоградских фермеров.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="rounded-md text-xs xl:text-s py-3 w-full lg:w-auto lg:p-button bg-black text-white font-semibold"
        onClick={handleShowModal}>
        Заполнить анкету
      </button>
    </div>
  );
};
