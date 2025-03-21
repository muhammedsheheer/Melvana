"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[#194129] px-4 py-12 md:py-20 lg:px-40">
      <div className="flex flex-col gap-6 md:ml-[4%] md:gap-8">
        <div className="flex flex-col items-center justify-center gap-6 md:mr-[8%] md:flex-row md:gap-24">
          <Link
            href={"/"}
            className="font-playfair text-center text-xs font-[600] uppercase tracking-[0.96px] text-[#A98151]"
          >
            Home
          </Link>
          <Link
            href={"/menu"}
            className="font-playfair text-center text-xs font-[600] uppercase tracking-[0.96px] text-[#A98151]"
          >
            Menu
          </Link>

          <Link
            href={"/about-us"}
            className="font-playfair text-center text-xs font-[600] uppercase tracking-[0.96px] text-[#A98151]"
          >
            About
          </Link>

          <Link href={"/"}>
            <Image
              src={"/images/home/hero/logo.png"}
              width={281}
              height={74}
              alt="logo"
              className="w-32 md:mx-10"
            />
          </Link>

          <Link
            href={""}
            className="font-playfair text-center text-xs font-[600] uppercase tracking-[0.96px] text-[#A98151]"
          >
            Reorder
          </Link>
          <Link
            href={""}
            className="font-playfair text-center text-xs font-[600] uppercase tracking-[0.96px] text-[#A98151]"
          >
            Reviews
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <Link href={""} target="_blank">
            <Icons.instagram className="text-[#A98151]" />
          </Link>
          <Link href={""} target="_blank">
            <Icons.facebook className="text-[#A98151]" />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:mr-[8%] md:flex-row md:gap-12">
          <div className="flex flex-col justify-center gap-28 md:flex-row md:justify-between">
            <div className="flex flex-col items-center justify-center gap-2">
              <h6 className="font-playfair text-base font-[600] capitalize tracking-[0.48px] text-[#fff] md:text-lg">
                Hours of Operation
              </h6>
              <p className="font-playfair text-center text-sm font-[400] tracking-[0.44px] text-[#A98151] md:text-base">
                Mon-Wed: 12:00pm-10:00pm, <br />
                Thu-Sun: 11:30pm-10:00pm
              </p>
            </div>
            <div className="hidden h-[100px] border-r-[1px] border-r-[#A98151] md:block" />
          </div>
          <div className="flex flex-col justify-center gap-28 md:flex-row md:justify-between">
            <div className="flex flex-col items-center justify-center gap-2 md:mx-6">
              <h6 className="font-playfair text-base font-[600] capitalize tracking-[0.48px] text-[#fff] md:text-lg">
                Address{" "}
              </h6>
              <Link
                href={""}
                target="_blank"
                className="font-playfair text-center text-sm font-[400] tracking-[0.44px] text-[#A98151] md:text-base"
              >
                Horsfield St, Bolton BL3 4LU
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-28 md:flex-row md:justify-between">
            <div className="hidden h-[100px] border-r-[1px] border-r-[#A98151] md:block" />
            <div className="flex flex-col items-center justify-center gap-2">
              <h6 className="font-playfair text-base font-[600] capitalize tracking-[0.48px] text-[#fff] md:text-lg">
                Contact
              </h6>
              <Link
                href={""}
                className="font-playfair text-center text-sm font-[400] tracking-[0.44px] text-[#A98151] md:text-base"
              >
                +01204 860038
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
