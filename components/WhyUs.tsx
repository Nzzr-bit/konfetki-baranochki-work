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
    <div className="container mx-auto mb-36 px-4">
      <h2 className="text-xl font-bold mb-14">почему с нами</h2>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
        <div>
          <h3 className="text-lg font-semibold italic mb-6">
            Наша главная <br />
            ценность – люди. 
          </h3>
          <p className="text-s mb-6 font-medium">
            В кулинариях Конфетки-бараночки мы верим, что душевность и
            внимательность к каждому человеку — основа нашей жизни. Мы создаем
            атмосферу, где каждый гость чувствует себя уютно, а каждая встреча с
            нашими блюдами становится настоящим праздником.
          </p>
          <p className="text-s mb-6 font-medium">
            Присоединяйся к нашей команде, развивайся вместе с нами, будь
            успешным. Мы ищем людей, готовых делиться своей душевностью и
            профессионализмом, чтобы каждый день делать мир немного вкуснее и
            радостнее.
          </p>
          <button
            className="rounded-md text-base py-2 px-6 md:p-button bg-black text-white"
            onClick={handleShowModal}>
            Заполнить анкету
          </button>
        </div>
        <div>
          <div className="flex mb-16 items-start">
            <Image
              src="/WhyUsIcon2.svg"
              width={72}
              height={72}
              loading="lazy"
              alt="люди"
              className="object-contain mr-4"
            />
            <div>
              <h3 className="text-m font-bold mb-2">люди</h3>
              <p className="text-base font-medium">
                Для нас важно что бы гость <br /> ощущал комфорт и любовь.
              </p>
            </div>
          </div>
          <div className="flex mb-16 items-start">
            <Image
              src="/WhyUsIcon1.svg"
              width={72}
              height={72}
              loading="lazy"
              alt="делать лучше"
              className="object-contain mr-4"
            />
            <div>
              <h3 className="text-m font-bold mb-2">делать лучше</h3>
              <p className="text-base font-medium">
                Мы профессионалы и для нас важно <br />
                всегда двигаться вперед.
              </p>
            </div>
          </div>
          <div className="flex mb-16 items-start">
            <Image
              src="/WhyUsIcon3.svg"
              width={72}
              height={72}
              loading="lazy"
              alt="доверие"
              className="object-contain mr-4"
            />
            <div>
              <h3 className="text-m font-bold mb-2">доверие</h3>
              <p className="text-base font-medium">
                Мы используем только качественные <br /> ингредиенты от местных
                Волгоградских <br /> фермеров.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
