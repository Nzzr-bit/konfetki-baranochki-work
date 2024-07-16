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
          className="mr-2 xl:mr-8 relative  lg:w-2/3 xl:w-auto "
        />
        <div className="w-full mt-3 lg:mt-0 flex flex-col justify-between">
          <Link
            className="mb-3 lg:mb-7  link-social w-full"
            href=" https://t.me/confetkibaranochki">
            <Image
              src="./IconTG.svg"
              alt="Телеграмм"
              width={40}
              height={30}
              className="mr-2"
            />
            <p className="text-s xl:text-m">Telegram</p>
          </Link>
          <Link
            className="mb-3 xl:mb-7 link-social w-full"
            href="https://vk.com/confetkibaranochki">
            <Image
              src="./IconVK.svg"
              alt="Вконтакте"
              width={40}
              height={40}
              className="mr-2 "
            />
            <p className="text-s xl:text-m">ВКонтакте</p>
          </Link>
          <Link
            className="  link-social w-full"
            href="https://ok.ru/group/56732413722652">
            <svg
              className="absulute right-1/2 "
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.224381 11.9287C0.365913 12.0667 0.556759 12.1423 0.754381 12.1387C0.951409 12.1391 1.14109 12.064 1.28438 11.9287L10.6144 2.58994V10.6487C10.6144 11.0629 10.9502 11.3987 11.3644 11.3987C11.5658 11.4042 11.7608 11.3273 11.9042 11.1857C12.0477 11.0442 12.1272 10.8502 12.1244 10.6487V0.916501C12.1504 0.802408 12.1498 0.681876 12.1198 0.56444C12.0519 0.298706 11.8444 0.0912066 11.5787 0.0233429C11.4612 -0.00664802 11.3407 -0.00725396 11.2266 0.0187285H1.49438C1.08017 0.0187285 0.744381 0.354515 0.744381 0.768728C0.744381 1.18294 1.08017 1.51873 1.49438 1.51873H9.56438L0.224381 10.8587C0.08085 10.9997 0 11.1925 0 11.3937C0 11.5949 0.08085 11.7877 0.224381 11.9287Z"
                fill="white"
              />
            </svg>

            <Image
              src="./IconOK.svg"
              alt="Одноклассники"
              width={30}
              height={30}
              className="mr-2 "
            />
            <p className="text-s xl:text-m">Одноклассники</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
