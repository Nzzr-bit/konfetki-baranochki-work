import Image from "next/image";
import React from "react";

export const Guarantees = () => {
  return (
    <div className="bg-main-red mb-28 md:mb-36">
      <div className="container mx-auto">
        <h2 className="text-lg1 font-bold mb-16 pt-16 text-white">
          мы гарантируем
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-rows-2 md:grid-cols-1 justify-center pb-16">
          <div className="md:flex md:flex-wrap justify-center">
            <div className="flex flex-col items-center mb-9 md:mb-16 md:w-1/3">
              <Image
                src="./GuaranteesIcon6.svg"
                width={70}
                height={70}
                loading="lazy"
                alt="Айда к нам!"
                className="object-contain mb-3 md:mb-5 relative w-14 md:w-16"
              />
              <h3 className="text-base xl:text-m text-white font-semibold text-center">
                высокая <br />
                заработная плата
              </h3>
            </div>
            <div className="flex flex-col items-center mb-9 md:mb-16 md:w-1/3">
              <Image
                src="./GuaranteesIcon4.svg"
                width={70}
                height={70}
                loading="lazy"
                alt="Айда к нам!"
                className="object-contain mb-3 md:mb-5 relative w-14 md:w-16"
              />
              <h3 className="text-base xl:text-m text-white font-semibold text-center">
                бесплатный <br /> комплексный обед{" "}
              </h3>
            </div>
            <div className="flex flex-col items-center mb-9 md:mb-16 md:w-1/3">
              <Image
                src="./GuaranteesIcon2.svg"
                width={70}
                height={70}
                loading="lazy"
                alt="Айда к нам!"
                className="object-contain mb-3 md:mb-5 relative w-14 md:w-16"
              />
              <h3 className="text-base xl:text-m text-white font-semibold text-center">
                работа рядом <br /> c домом
              </h3>
            </div>
          </div>
          <div className="md:flex md:flex-wrap justify-center">
            <div className="flex flex-col items-center mb-9 md:w-1/3">
              <Image
                src="./GuaranteesIcon3.svg"
                width={70}
                height={70}
                loading="lazy"
                alt="Айда к нам!"
                className="object-contain mb-3 md:mb-5 relative w-14 md:w-16"
              />
              <h3 className="text-base xl:text-m text-white font-semibold text-center">
                корпоративная <br /> система скидок
              </h3>
            </div>
            <div className="flex flex-col items-center mb-9 md:w-1/3">
              <Image
                src="./GuaranteesIcon5.svg"
                width={70}
                height={70}
                loading="lazy"
                alt="Айда к нам!"
                className="object-contain mb-3 md:mb-5 relative w-14 md:w-16"
              />
              <h3 className="text-base xl:text-m text-white font-semibold text-center">
                удобный <br /> график работы
              </h3>
            </div>
            <div className="flex flex-col items-center mb-9 md:w-1/3">
              <Image
                src="./GuaranteesIcon1.svg"
                width={70}
                height={70}
                loading="lazy"
                alt="Айда к нам!"
                className="object-contain mb-3 md:mb-5 relative w-14 md:w-16"
              />
              <h3 className="text-base xl:text-m text-white font-semibold text-center">
                обучение <br /> поварскому искусству
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
