import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#050505]">
        <h2 className="font-playfair text-center text-5xl text-[#C1B6A6] md:left-[15%] md:text-8xl">
          The Mevlana
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#050505] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/3.jpg"
              width={6024}
              height={4024}
              alt="private dining"
              className="w-full rotate-180 rounded-lg object-cover md:h-[600px] md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="font-playfair max-w-[500px] text-center text-5xl md:text-start md:text-7xl">
              From Dream
              <br />
              to Sizzle
            </h1>
            <p className="max-w-full text-center font-light text-[#C1B6A6] md:text-start md:leading-[160%]">
              What began as a vision—a quest for deeper connection through
              food—has blossomed into Mevlana, a place where flavors and souls
              intertwine. Inspired by the wisdom of Rumi, our journey is not
              merely about preparing meals, but about creating an experience
              that nourishes both the heart and the spirit. From humble
              beginnings to a sanctuary for those who seek meaning in every
              taste, our commitment to craftsmanship, warmth, and sincerity
              remains unwavering.
              <br />
              <br />
              Every ingredient is chosen with care, every dish is prepared with
              love, and each bite carries the poetry of tradition and
              togetherness. At Mevlana, we don’t just serve food—we offer
              moments of reflection, a taste of harmony, and a celebration of
              life’s boundless beauty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
