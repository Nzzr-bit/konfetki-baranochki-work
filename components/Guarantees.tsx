import Image from "next/image";
import React from "react";

export function Guarantees() {
  return (
    <div className=" bg-mainRed">
      <div className="container mx-auto">
        <h2 className="text-lg1 font-bold mb-16 pt-16 text-white">
          мы гарантируем
        </h2>
        <div className=" flex justify-center space-x-4 pb-16">
          <div>
            <div className="flex flex-col items-center mb-16">
              <Image
                src="/GuaranteesIcon6.svg"
                width={70}
                height={70}
                loading="lazy"
                alt="Айда к нам!"
                className="object-contain mb-6"
              />
              <h3 className="text-m text-white">высокая заработная плата </h3>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/GuaranteesIcon3.svg"
                width={70}
                height={70}
                loading="lazy"
                alt="Айда к нам!"
                className="object-contain mb-6"
              />
              <h3 className="text-m text-white">
                корпоративная система скидок
              </h3>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center mb-16 ">
              <Image
                src="/GuaranteesIcon4.svg"
                width={70}
                height={70}
                loading="lazy"
                alt="Айда к нам!"
                className="object-contain mb-6"
              />
              <h3 className="text-m text-white">
                бесплатный комплексный обед{" "}
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/GuaranteesIcon5.svg"
                width={70}
                height={70}
                loading="lazy"
                alt="Айда к нам!"
                className="object-contain mb-6"
              />
              <h3 className="text-m text-white">удобный график работы</h3>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center mb-16">
              <Image
                src="/GuaranteesIcon2.svg"
                width={70}
                height={70}
                loading="lazy"
                alt="Айда к нам!"
                className="object-contain mb-6"
              />
              <h3 className="text-m text-white">работа рядом c домом</h3>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/GuaranteesIcon1.svg"
                width={70}
                height={70}
                loading="lazy"
                alt="Айда к нам!"
                className="object-contain mb-6"
              />
              <h3 className="text-m text-white">
                обучение поварскому искусству
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
