import React from "react";
import SlickSlider from "./modules/SlickSlider";

export function Vacancies() {
  return (
    <div
      className=" mb-36 overflow-hidden
    ">
      <SlickSlider />
      <div className="container mx-auto">
        <button className="rounded-md text-base p-button bg-main-red text-white mb-5">
          Заполнить анекту
        </button>
        <p className="text-base pt-3 font-medium">
          Полный перечень вакансий на 
          <a href="" className="text-main-red underline">
            hh.ru
          </a>
        </p>
      </div>
    </div>
  );
}
