import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reserve: React.FC = () => {
  return (
    <section className="h-full w-full">
      <div className="relative h-full w-full">
        <div className="absolute bottom-0 right-1/2 w-full translate-x-1/2 px-4 md:w-[550px]">
          <div className="flex h-[450px] w-full flex-col items-center justify-center gap-4 bg-[url('/images/home/reserve/frame.png')] bg-cover bg-center px-6 py-14 md:h-[750px] md:w-[650px] md:py-20">
            <h1 className="font-marcellus mt-16 text-center text-4xl font-[400] uppercase text-[#fff] md:mt-28 md:text-6xl">
              Reserve <br />
              Your Table
            </h1>
            <p className="font-playfair w-full max-w-[500px] text-center text-sm font-[400] text-[#fff] md:text-base">
              Secure your spot at Mevlana and embark on a journey of rich
              flavors and warm hospitality. From sizzling kebabs to aromatic
              Turkish coffee, every dish is crafted with authenticity and
              passion. Book your table now and experience the true essence of
              Turkish cuisine!
            </p>
            <div className="md:mt-4">
              <div className="flex items-center justify-center">
                <Button className="font-cormorant rounded-none bg-[#A98151] px-5 py-6 text-center text-xs font-[700] uppercase tracking-[4px] text-[#fff] hover:bg-[#e9b87c] md:px-7 md:py-7 md:text-sm">
                  <Link href={"/table-booking"}>Book Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={"/images/home/reserve/image.png"}
          width={281}
          height={74}
          alt="image"
          className="h-[500px] w-full object-cover md:h-full"
        />
      </div>
    </section>
  );
};

export default Reserve;
