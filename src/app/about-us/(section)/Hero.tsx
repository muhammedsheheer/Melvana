import Image from "next/image";

const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="flex w-full items-center justify-center bg-[#fff] py-6 lg:py-12"
    >
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-marcellus text-4xl font-semibold text-[#194129] md:leading-[66px] lg:text-6xl">
                Welcome to Mevlana <br />A Symphony of Flavors
              </h1>
              <p className="font-playfair font-normal text-[#679895]">
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
          <div className="flex w-full flex-col items-center justify-center gap-6 md:mt-16 lg:w-1/2">
            <Image
              src="/images/about-us/image10.jpg"
              width={951}
              height={975}
              alt="hero"
              className="h-full max-h-[600px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
