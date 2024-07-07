import React from "react";

export function AnimateSale() {
  return (
    <div className="container mx-auto">
      <div className="relative flex overflow-x-hidden shadow-xl mb-36 rounded-[60px]">
        <div className="py-12 animate-marquee whitespace-nowrap flex items-center ">
          <span className="text-xxl mx-4 text-redActive font-medium">
            -20% в ресторанах
          </span>
          <span className=" mx-4 p-2 rounded-full border-8 border-ultraLightGrey bg-ultraLightGrey" />
          <span className="text-xxl mx-4 text-redActive font-medium">
            -20% в отелях
          </span>
          <span className=" mx-4 p-2 rounded-full border-8 border-ultraLightGrey bg-ultraLightGrey" />
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex items-center">
          <span className="text-xxl mx-4 text-redActive font-medium">
            -20% в ресторанах
          </span>
          <span className=" mx-4 p-2 rounded-full border-8 border-ultraLightGrey bg-ultraLightGrey" />
          <span className="text-xxl mx-4 text-redActive font-medium">
            -20% в отелях
          </span>
          <span className=" mx-4 p-2 rounded-full border-8 border-ultraLightGrey bg-ultraLightGrey" />
        </div>
      </div>
      <p className="text-base">
        Подробнее на странице Программа лояльности для сотрудников
      </p>
    </div>
  );
}
