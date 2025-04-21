import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Reserve: React.FC = () => {
  return (
    <section className="h-full w-full">
      <div className="relative h-full w-full">
        <div className="absolute bottom-0 right-1/2 w-full translate-x-1/2 px-4 md:w-[550px]">
          <motion.div
            className="flex h-[450px] w-full flex-col items-center justify-center gap-4 bg-[url('/images/home/reserve/frame.png')] bg-cover bg-center px-6 py-14 md:h-[750px] md:w-[650px] md:py-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <motion.h1
              className="mt-16 text-center font-marcellus text-4xl font-[400] uppercase text-[#fff] md:mt-28 md:text-6xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              Reserve <br />
              Your Table
            </motion.h1>

            <motion.p
              className="w-full max-w-[500px] text-center font-playfair text-sm font-[400] text-[#fff] md:text-base"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: false }}
            >
              Secure your spot at Mevlana and embark on a journey of rich
              flavors and warm hospitality. From sizzling kebabs to aromatic
              Turkish coffee, every dish is crafted with authenticity and
              passion. Book your table now and experience the true essence of
              Turkish cuisine!
            </motion.p>

            <motion.div
              className="md:mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: false }}
            >
              <div className="flex items-center justify-center">
                <Button className="rounded-none bg-[#A98151] px-5 py-6 text-center font-cormorant text-xs font-[700] uppercase tracking-[4px] text-[#fff] hover:bg-[#e9b87c] md:px-7 md:py-7 md:text-sm">
                  <Link href={"/table-booking"}>Book Now</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
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
