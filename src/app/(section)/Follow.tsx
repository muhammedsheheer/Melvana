"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Follow: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] pb-4 pt-12">
      <div className="flex flex-col gap-8 md:gap-20">
        <div className="flex w-full flex-col gap-4 px-4 md:px-0">
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              className="w-full md:w-[40%]"
            >
              <Image
                src={"/images/home/follow/image1.png"}
                width={160}
                height={160}
                alt="image1"
                className="h-[300px] w-full object-cover md:h-[400px]"
              />
            </motion.div>

            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              className="w-full md:w-[20%]"
            >
              <Image
                src={"/images/home/follow/image2.png"}
                width={160}
                height={160}
                alt="image2"
                className="h-[300px] w-full object-cover md:h-[400px]"
              />
            </motion.div>

            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              className="flex h-[300px] w-full items-center justify-center bg-[#194129] md:h-[400px] md:w-[40%]"
            >
              <h1 className="text-center font-marcellus text-7xl font-[400] uppercase leading-tight text-[#A98151] md:text-[100px] md:tracking-[-5px]">
                SCROLL <br /> OUR <br /> STORY
              </h1>
            </motion.div>
          </div>

          <div className="flex w-full flex-col gap-4 md:flex-row">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              className="flex h-[300px] w-full flex-col items-center justify-center gap-5 bg-[#194129] md:h-[400px] md:w-[25%]"
            >
              <Image
                src={"/images/home/follow/insta.svg"}
                width={160}
                height={160}
                alt="insta"
                className="w-14"
              />
              <Link
                className="text-center font-marcellus text-3xl font-[400] uppercase text-[#A98151] md:text-4xl md:tracking-[-1px]"
                href={"https://www.instagram.com/mevlana_bolton/?hl=en"}
                target="_blank"
              >
                @mevlana_bolton
              </Link>
            </motion.div>

            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              className="w-full md:w-[50%]"
            >
              <Image
                src={"/images/home/follow/image3.png"}
                width={160}
                height={160}
                alt="image3"
                className="h-[300px] w-full object-cover md:h-[400px]"
              />
            </motion.div>

            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              className="z-0 flex w-full items-center justify-center md:w-[25%]"
            >
              <Image
                src={"/images/home/follow/image4.png"}
                width={160}
                height={160}
                alt="image4"
                className="z-0 h-[300px] w-full object-cover md:h-[400px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
