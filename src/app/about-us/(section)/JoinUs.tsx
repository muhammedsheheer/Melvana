import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JoinUs = ({}) => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center"
      style={{
        backgroundImage: `url('/images/about-us/4.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/60"></div>
      <div className="z-40 flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] p-6">
          <h1 className="font-playfair max-w-[500px] text-center text-5xl leading-[60px]">
            Gather in Harmony
            <br />
            Savor Every Moment{" "}
          </h1>
          <p className="max-w-[450px] text-center font-light leading-[160%] text-[#C1B6A6]">
            In the spirit of Mevlana’s wisdom, we welcome you to a place where
            food transcends nourishment—it becomes an expression of unity, love,
            and gratitude. Whether you’re seeking a quiet evening of reflection
            or a joyful gathering with loved ones, each dish is prepared with
            care, every flavor tells a story, and every moment invites you to
            embrace the present with open heart and soul.
          </p>
          <Button
            variant="image"
            className="group w-fit items-center gap-[1.19rem] px-10 py-7 font-semibold uppercase"
          >
            <Link
              href="/table-booking"
              className="flex items-center justify-center gap-2"
            >
              Book A Table{" "}
              <Icons.rightArrow className="duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-white" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
