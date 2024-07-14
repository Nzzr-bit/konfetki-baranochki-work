import Image from "next/image";
import Link from "next/link";
import React from "react";

export const KnowUs = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-ml font-semibold mb-16">ЗНАКОМЬСЯ С НАМИ</h2>
      <div className="flex items-start">
        <Image
          src="./KnowUsBanner.png"
          alt="Знакомся с нами"
          width={949}
          height={560}
          className="mr-8"
        />
        <div className="w-full">
          <Link className="mb-7  link-social w-full" href="">
            <Image
              src="./IconTG.svg"
              alt="Телеграмм"
              width={40}
              height={30}
              className="mr-3"
            />
            <p>Telegram</p>
          </Link>
          <Link className="mb-7  link-social w-full" href="">
            <Image
              src="./IconVK.svg"
              alt="Вконтакте"
              width={40}
              height={40}
              className="mr-3"
            />
            <p>ВКонтакте</p>
          </Link>
          <Link className="  link-social w-full" href="">
            <Image
              src="./IconOK.svg"
              alt="Одноклассники"
              width={30}
              height={30}
              className="mr-3"
            />
            <p>Одноклассники</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
