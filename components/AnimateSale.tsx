import React from "react";

export const AnimateSale = () => {
  return (
    <div className="container mx-auto mb-36">
      <div className="relative flex overflow-x-hidden shadow-xl rounded-[60px]">
        <div className="py-12 animate-marquee whitespace-nowrap flex items-center ">
          <span className="text-xxl mx-4 text-red-active font-medium">
            -20% в ресторанах
          </span>
          <span className=" mx-4 p-2 rounded-full border-8 border-ultra-light-grey bg-ultra-light-grey" />
          <span className="text-xxl mx-4 text-red-active font-medium">
            -20% в отелях
          </span>
          <span className=" mx-4 p-2 rounded-full border-8 border-ultra-light-grey bg-ultra-light-grey" />
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex items-center">
          <span className="text-xxl mx-4 text-red-active font-medium">
            -20% в ресторанах
          </span>
          <span className=" mx-4 p-2 rounded-full border-8 border-ultra-light-grey bg-ultra-light-grey" />
          <span className="text-xxl mx-4 text-red-active font-medium">
            -20% в отелях
          </span>
          <span className=" mx-4 p-2 rounded-full border-8 border-ultra-light-grey bg-ultra-light-grey" />
        </div>
      </div>
      <p className="text-base pt-3 font-medium">
        Подробнее на странице 
        <a href="" className="text-main-red underline">
          Программа лояльности для сотрудников
        </a>
      </p>
    </div>
  );
};
