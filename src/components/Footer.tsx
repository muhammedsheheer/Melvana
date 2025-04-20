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
            className="text-center font-playfair text-xs font-[600] uppercase tracking-[0.96px] text-[#A98151]"
          >
            Home
          </Link>
          <Link
            href={"/menu"}
            className="text-center font-playfair text-xs font-[600] uppercase tracking-[0.96px] text-[#A98151]"
          >
            Menu
          </Link>
          <Link
            href={"/about-us"}
            className="text-center font-playfair text-xs font-[600] uppercase tracking-[0.96px] text-[#A98151]"
          >
            Our Story
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

          {/* <Link
            href={""}
            className="text-center font-playfair text-xs font-[600] uppercase tracking-[0.96px] text-[#A98151]"
          >
            Reorder
          </Link>
          <Link
            href={""}
            className="text-center font-playfair text-xs font-[600] uppercase tracking-[0.96px] text-[#A98151]"
          >
            Reviews
          </Link> */}
          <Link
            href={"/table-booking"}
            className="text-center font-playfair text-xs font-[600] uppercase tracking-[0.96px] text-[#A98151]"
          >
            Booking
          </Link>
          <Link
            href={"/contact"}
            className="text-center font-playfair text-xs font-[600] uppercase tracking-[0.96px] text-[#A98151]"
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <Link
            href={"https://www.instagram.com/mevlana_bolton/?hl=en"}
            target="_blank"
          >
            <Icons.instagram className="text-[#A98151]" />
          </Link>
          <Link
            href={"https://www.facebook.com/p/Mevlana-Bolton-61560019979761/"}
            target="_blank"
          >
            <Icons.facebook className="text-[#A98151]" />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-12">
          <div className="flex flex-col justify-center gap-28 md:flex-row md:justify-between">
            <div className="flex flex-col items-center justify-center gap-2">
              <h6 className="font-playfair text-base font-[600] capitalize tracking-[0.48px] text-[#fff] md:text-lg">
                Hours of Operation
              </h6>
              <p className="text-center font-playfair text-sm font-[400] tracking-[0.44px] text-[#A98151] md:text-base">
                Mon-Thu: 11:30am-10:00pm, <br />
                Fri-Sun: 11:30am-11:00pm
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
                href={"https://g.co/kgs/NyQnxGj"}
                target="_blank"
                className="text-center font-playfair text-sm font-[400] tracking-[0.44px] text-[#A98151] md:text-base"
              >
                Horsfield St, Bolton BL3 4LU, United Kingdom{" "}
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
                href={"tel:+441204860038"}
                className="text-center font-playfair text-sm font-[400] tracking-[0.44px] text-[#A98151] md:text-base"
              >
                +44 1204 860038{" "}
              </Link>
              <Link
                href={"mailto:info@mevlanabolton.com"}
                className="text-center font-playfair text-sm font-[400] tracking-[0.44px] text-[#A98151] md:text-base"
              >
                info@mevlanabolton.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
