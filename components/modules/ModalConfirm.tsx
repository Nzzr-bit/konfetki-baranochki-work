import Image from "next/image";
import React from "react";

export const ModalConfirm = () => {
  return (
    <div>
      <Image
        src="./iconSucsess.svg"
        width={100}
        height={100}
        alt="Sucsess"
        className="mb-10 mt-28"
      />
      <p className="text-lg1 font-bold mb-5">Отклик успешно отправлен!</p>
      <p className="text-xs">
        Спасибо за заявку! В скором времени с вами свяжется наш менеджер.
      </p>
      <button className="rounded-md text-xs xl:text-s py-3 w-full lg:w-auto lg:p-button bg-black text-white mt-10">
        Вернуться на сайт
      </button>
    </div>
  );
};
