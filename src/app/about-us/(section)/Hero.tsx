import Image from "next/image";

const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="mt-10 flex w-full items-center justify-center"
    >
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-playfair text-4xl font-semibold text-[#fbead2] md:leading-[66px] lg:text-6xl">
                Welcome to
                <br /> Mevlana
                <br />A Symphony
                <br /> of Flavors
              </h1>
              <p className="font-manrope font-normal text-[#C1B6A6]">
                At Mevlana, dining is more than a meal—it`s a soulful journey.
                Every dish is lovingly crafted with devotion, blending the
                wisdom of tradition with the beauty of shared moments. From the
                finest ingredients to time-honored recipes, we invite you to
                savor a harmony of flavors that nourish both body and spirit.
                Let each bite reflect unity, warmth, and the poetic essence of
                life.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:mt-8 lg:w-1/2">
            <Image
              src="/images/about-us/2.jpg"
              width={2648}
              height={3936}
              alt="hero"
              className="w-full object-cover md:h-[800px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
