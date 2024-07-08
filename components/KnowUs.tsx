import Image from "next/image";
import React from "react";

export function KnowUs() {
  return (
    <div className="container mx-auto">
      <h2 className="text-ml font-semibold mb-16">ЗНАКОМЬСЯ С НАМИ</h2>
      <div className="flex items-start">
        <Image
          src="/KnowUsBanner.png"
          alt="Знакомся с нами"
          width={949}
          height={560}
          className="mr-8"
        />
        <div className="">
          <button className="px-33 bg-main-red">22</button>
          <button className="px-33 bg-main-red">22</button>
          <button className="px-33 bg-main-red">22</button>
        </div>
      </div>
    </div>
  );
}
