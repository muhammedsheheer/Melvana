import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Story: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] px-4 py-12 md:px-14 md:py-24">
      <div className="absolute left-1/2 top-20 z-10 hidden -translate-x-1/2 md:block">
        <div className="flex flex-col items-center justify-center gap-4">
          <h6 className="font-playfair text-lg font-[400] lowercase text-[#A98151]">
            OUR STORY
          </h6>
          <h1 className="text-center font-marcellus text-7xl font-[400] uppercase text-[#A98151] md:text-[150px] md:tracking-[-6px]">
            MEVLANA
          </h1>
        </div>
      </div>
      <div className="z-50 flex flex-col gap-8 md:pt-24">
        <div className="flex flex-col items-center justify-center gap-4 md:hidden">
          <h6 className="font-playfair text-lg font-[400] lowercase text-[#A98151]">
            OUR STORY
          </h6>
          <h1 className="text-center font-marcellus text-7xl font-[400] uppercase text-[#A98151] md:text-[150px] md:tracking-[-6px]">
            MEVLANA
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:items-end md:justify-end">
          <p className="w-full max-w-[300px] text-center font-playfair text-sm font-[400] capitalize text-[#194129] md:text-right md:text-base">
            Whether you`re joining us for a family meal, a casual coffee, or a
            special occasion, we promise a delightful dining experience rooted
            in tradition and rich with flavor. Come and savor the true essence
            of Turkey — right here in the heart of Bolton.
          </p>
          <Image
            src={"/images/home/story/image.png"}
            width={281}
            height={74}
            alt="logo"
            className="z-50 h-full w-full"
          />
          <p className="w-full max-w-[300px] text-center font-playfair text-sm font-[400] capitalize text-[#194129] md:text-start md:text-base">
            At Mevlana, we bring the heart of Turkish cuisine to Bolton with
            authentic flavors, warm hospitality, and a cozy ambiance. Inspired
            by Turkey’s rich culinary traditions, our menu features
            mouthwatering kebabs, fresh mezzes, aromatic coffee, and delectable
            desserts.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Button className="rounded-none bg-[#A98151] px-5 py-6 text-center font-cormorant text-xs font-[700] uppercase tracking-[4px] text-[#fff] hover:bg-[#e9b87c] md:px-7 md:py-7 md:text-sm">
            <Link href={"/table-booking"}>Book Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Story;
