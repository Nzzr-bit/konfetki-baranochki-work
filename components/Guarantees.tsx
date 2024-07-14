import Image from "next/image";
import React from "react";

export const Guarantees = () => {
  return (
    <div className=" bg-main-red mb-36">
      <div className="container mx-auto">
        <h2 className="text-lg1 font-bold mb-16 pt-16 text-white">
          мы гарантируем
        </h2>
        <div className=" flex justify-center space-x-36 pb-16 ">
          <div>
            <div className="flex flex-col items-center mb-16">
              <Image
                src="./GuaranteesIcon6.svg"
                width={70}
                height={70}
                loading="lazy"
                alt="Айда к нам!"
                className="object-contain mb-6"
              />
              <h3 className="text-m text-white font-semibold text-center">
                высокая <br />
                заработная плата
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="./GuaranteesIcon3.svg"
                width={70}
                height={70}
                loading="lazy"
                alt="Айда к нам!"
                className="object-contain mb-6"
              />
              <h3 className="text-m text-white font-semibold text-center">
                корпоративная <br /> система скидок
              </h3>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center mb-16 ">
              <Image
                src="./GuaranteesIcon4.svg"
                width={70}
                height={70}
                loading="lazy"
                alt="Айда к нам!"
                className="object-contain mb-6"
              />
              <h3 className="text-m text-white font-semibold text-center">
                бесплатный <br /> комплексный обед{" "}
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="./GuaranteesIcon5.svg"
                width={70}
                height={70}
                loading="lazy"
                alt="Айда к нам!"
                className="object-contain mb-6"
              />
              <h3 className="text-m text-white font-semibold text-center">
                удобный <br /> график работы
              </h3>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center mb-16">
              <Image
                src="./GuaranteesIcon2.svg"
                width={70}
                height={70}
                loading="lazy"
                alt="Айда к нам!"
                className="object-contain mb-6"
              />
              <h3 className="text-m text-white font-semibold text-center">
                работа рядом <br /> c домом
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="./GuaranteesIcon1.svg"
                width={70}
                height={70}
                loading="lazy"
                alt="Айда к нам!"
                className="object-contain mb-6"
              />
              <h3 className="text-m text-white font-semibold text-center">
                обучение <br /> поварскому искусству
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
