import Image from "next/image";
import Link from "next/link";
import React from "react";

export const KnowUs = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-ml font-semibold mb-16">ЗНАКОМЬСЯ С НАМИ</h2>
      <div className=" lg:flex items-start">
        <Image
          src="./KnowUsBanner.png"
          alt="Знакомся с нами"
          width={949}
          height={560}
          className="mr-2 xl:mr-8"
        />
        <div className="w-full mt-3 lg:mt-0">
          <Link
            className="mb-3 lg:mb-7  link-social w-full"
            href=" https://t.me/confetkibaranochki">
            <Image
              src="./IconTG.svg"
              alt="Телеграмм"
              width={40}
              height={30}
              className="mr-2 lg:mr-3"
            />
            <p className="text-base xl:text-m">Telegram</p>
          </Link>
          <Link
            className="mb-3 lg:mb-7 link-social w-full"
            href="https://vk.com/confetkibaranochki">
            <Image
              src="./IconVK.svg"
              alt="Вконтакте"
              width={40}
              height={40}
              className="mr-2 lg:mr-3"
            />
            <p className="text-base xl:text-m">ВКонтакте</p>
          </Link>
          <Link
            className="  link-social w-full"
            href="https://ok.ru/group/56732413722652">
            <Image
              src="./IconOK.svg"
              alt="Одноклассники"
              width={30}
              height={30}
              className="mr-2 lg:mr-3"
            />
            <p className="text-base xl:text-m">Одноклассники</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
