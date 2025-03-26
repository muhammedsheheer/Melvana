import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#fff] p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#fff]">
        <h2 className="font-oswald text-center text-8xl text-[#194129] md:left-[15%] md:text-8xl">
          The Mevlana
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#fff] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/image2.jpg"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="font-oswald max-w-[500px] text-center text-6xl text-[#194129] sm:text-7xl md:text-start">
              From Passion
              <br />
              to Perfection{" "}
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#679895] md:text-start">
              What began as a vision—a quest for deeper connection through
              food—has blossomed into Mevlana, a place where flavors and souls
              unite. Inspired by the wisdom of Rumi, our journey is not just
              about preparing meals, but about creating an experience that
              nourishes both heart and spirit.
              <br /> From humble beginnings to a sanctuary for those who seek
              meaning in every taste, our devotion to craftsmanship, warmth, and
              sincerity remains unchanged. Every ingredient is chosen with care,
              every dish is prepared with love, and every bite whispers the
              poetry of tradition and togetherness.
              <br /> At Mevlana, we do not simply serve food—we offer a moment
              of reflection, a taste of harmony, and a celebration of life’s
              boundless beauty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
