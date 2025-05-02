import Image from "next/image";
import React from "react";

const Gallery: React.FC = () => {
  return (
    <section className="h-full w-full bg-transparent px-4 py-12 md:px-44 md:py-24">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-12">
        <Image
          src="/images/gallery/1.jpg"
          width={208}
          height={104}
          alt="logo"
          unoptimized
          className="h-auto w-full md:h-full"
        />
        <Image
          src="/images/gallery/2.jpg"
          width={208}
          height={104}
          alt="logo"
          unoptimized
          className="h-auto w-full md:h-full"
        />
        <Image
          src="/images/gallery/3.jpg"
          width={208}
          height={104}
          alt="logo"
          unoptimized
          className="h-auto w-full md:h-full"
        />
        <Image
          src="/images/gallery/4.jpg"
          width={208}
          height={104}
          alt="logo"
          unoptimized
          className="h-auto w-full md:h-full"
        />
        <Image
          src="/images/gallery/5.jpg"
          width={208}
          height={104}
          alt="logo"
          unoptimized
          className="h-auto w-full md:h-full"
        />
        <Image
          src="/images/gallery/6.jpg"
          width={208}
          height={104}
          alt="logo"
          unoptimized
          className="h-auto w-full md:h-full"
        />
        <Image
          src="/images/gallery/7.jpg"
          width={208}
          height={104}
          alt="logo"
          unoptimized
          className="h-auto w-full md:h-full"
        />
        <Image
          src="/images/gallery/8.jpg"
          width={208}
          height={104}
          alt="logo"
          unoptimized
          className="h-auto w-full md:h-full"
        />
        <Image
          src="/images/gallery/9.jpg"
          width={208}
          height={104}
          alt="logo"
          unoptimized
          className="h-auto w-full md:h-full"
        />
      </div>
    </section>
  );
};

export default Gallery;
