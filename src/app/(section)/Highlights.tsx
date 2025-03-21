import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Highlights: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#194129] px-4 py-8 md:px-16 md:py-20">
      <div className="absolute left-20 right-20 top-16 hidden md:block">
        <h1 className="font-marcellus hidden text-center text-7xl font-[400] uppercase text-[#fff] md:block">
          An Elevated Turkish Dining <br /> Experience
        </h1>
      </div>
      <div className="flex flex-col gap-6 md:pt-20">
        <div className="flex items-center justify-center">
          <h1 className="font-marcellus font-8xl text-center text-4xl font-[400] uppercase text-[#fff] md:hidden">
            An Elevated Turkish Dining Experience
          </h1>
        </div>
        <div className="flex flex-col gap-6 px-4 md:flex-row md:gap-8 md:px-0">
          <div className="flex w-full flex-col items-center justify-center gap-4 md:w-1/4 md:gap-6">
            <Image
              src={"/images/home/highlights/image1.png"}
              width={281}
              height={74}
              alt="logo"
              className="z-50 h-auto w-full md:h-full"
            />
            <h3 className="font-playfair text-center text-lg font-[500] capitalize text-[#fff]">
              KARISIK IZGARA
            </h3>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4 md:w-1/4 md:gap-6">
            <Image
              src={"/images/home/highlights/image2.png"}
              width={281}
              height={74}
              alt="logo"
              className="z-50 h-auto w-full md:h-full"
            />
            <h3 className="font-playfair text-center text-lg font-[500] capitalize text-[#fff]">
              TAVUK ŞIŞ{" "}
            </h3>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4 md:w-1/4 md:gap-6">
            <Image
              src={"/images/home/highlights/image3.png"}
              width={281}
              height={74}
              alt="logo"
              className="z-50 h-auto w-full md:h-full"
            />
            <h3 className="font-playfair text-center text-lg font-[500] capitalize text-[#fff]">
              SAKSUKA{" "}
            </h3>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4 md:w-1/4 md:gap-6">
            <Image
              src={"/images/home/highlights/image4.png"}
              width={281}
              height={74}
              alt="logo"
              className="z-50 h-auto w-full md:h-full"
            />
            <h3 className="font-playfair text-center text-lg font-[500] capitalize text-[#fff]">
              TURKISH TEA{" "}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
