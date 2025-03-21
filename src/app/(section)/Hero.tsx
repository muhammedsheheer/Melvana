import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute left-0 top-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/videos/bg.mp4"
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.43)]" />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 md:gap-8">
        <h1 className="font-marcellus text-center text-7xl font-[400] uppercase text-[#A98151] md:text-[150px] md:tracking-[-6px]">
          MEVLANA
        </h1>
        <Button className="font-cormorant rounded-none bg-[#A98151] px-5 py-6 text-center text-xs font-[700] uppercase tracking-[4px] text-[#fff] hover:bg-[#e9b87c] md:px-7 md:py-7 md:text-sm">
          <Link href={"/table-booking"}>Book Now</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
