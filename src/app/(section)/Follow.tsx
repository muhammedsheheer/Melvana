import Image from "next/image";
import Link from "next/link";
import React from "react";

const Follow: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] pb-4 pt-12">
      <div className="flex flex-col gap-8 md:gap-20">
        <div className="flex w-full flex-col gap-4 px-4 md:px-0">
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="w-full md:w-[40%]">
              {" "}
              <Image
                src={"/images/home/follow/image1.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-[400px]"
              />
            </div>

            <div className="w-full md:w-[20%]">
              {" "}
              <Image
                src={"/images/home/follow/image2.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-[400px]"
              />
            </div>
            <div className="h-[300px] w-full bg-[#194129] md:h-[400px] md:w-[40%]">
              <h1 className="font-marcellus text-7xl font-[400] uppercase text-[#A98151] md:text-[130px] md:tracking-[-5px]">
                SCROLL <br /> OUR <br /> STORY
              </h1>
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="flex h-[300px] w-full flex-col items-center justify-center gap-5 bg-[#194129] md:h-[400px] md:w-[25%]">
              <Image
                src={"/images/home/follow/insta.svg"}
                width={160}
                height={160}
                alt="logo"
                className="w-14"
              />
              <Link
                className="text-center font-marcellus text-3xl font-[400] uppercase text-[#A98151] md:text-4xl md:tracking-[-1px]"
                href={"https://www.instagram.com/mevlana_bolton/?hl=en"}
                target="_blank"
              >
                @mevlana_bolton
              </Link>
            </div>
            <div className="w-full md:w-[50%]">
              {" "}
              <Image
                src={"/images/home/follow/image3.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-[400px]"
              />
            </div>

            <div className="z-0 flex w-full items-center justify-center md:w-[25%]">
              {" "}
              <Image
                src={"/images/home/follow/image4.png"}
                width={160}
                height={160}
                alt="logo"
                className="z-0 h-[300px] w-full object-cover md:h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
