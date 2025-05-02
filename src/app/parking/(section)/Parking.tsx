// import React from "react";

// const Parking = () => {
//   return (
//     <section className="h-full w-full bg-transparent px-4 py-12 md:px-40 md:py-24">
//       <div className="flex flex-col items-center justify-center gap-10 md:gap-16">
//         <div className="flex flex-col items-center justify-center gap-4"></div>
//       </div>
//     </section>
//   );
// };

// export default Parking;

"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";

const Parking = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(max-width:500px)", () => {
      gsap.to(".welcome-one", {
        scrollTrigger: {
          trigger: ".welcome-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        duration: 0.8,
      });

      gsap.to(".welcome-two", {
        scrollTrigger: {
          trigger: ".welcome-two",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        duration: 0.8,
      });
    });

    mm.add("(min-width:501px)", () => {
      gsap.to(".welcome-one", {
        scrollTrigger: {
          trigger: ".welcome-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8,
      });
      gsap.to(".welcome-two", {
        scrollTrigger: {
          trigger: ".welcome-two",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8,
      });
    });

    const splitType = document.querySelectorAll(".head-welcome");
    splitType.forEach((char) => {
      if (char instanceof HTMLElement) {
        const text = new SplitType(char, { types: "chars" });
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.2,
        });
      }
    });
    gsap.to(".about-arrow", {
      scrollTrigger: {
        trigger: ".about-arrow",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      duration: 1,
    });
  }, []);
  const text = "Catering";
  const text1 = "Prayer";

  return (
    <section
      id="welcome"
      className="relative flex w-full items-center justify-center bg-transparent"
      style={{
        backgroundImage: "url('/images/home/about/mask.png')",
        backgroundPosition: "center center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="absolute left-0 top-0 hidden h-full w-full items-start justify-center md:flex">
        <div className="z-30 ml-[108px] mr-[108px] h-full w-full xl:border-x-[0.25px] xl:border-x-primary"></div>
      </div>
      <div className="relative flex h-fit w-full flex-col items-center justify-center gap-9 overflow-hidden bg-transparent px-3 py-12 md:gap-20 md:px-8 lg:p-0 lg:py-24">
        <div className="z-30 flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-5 lg:items-center lg:gap-9">
          <div className="flex w-full flex-col items-center justify-center gap-10 lg:w-1/2">
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <p className="styled_section_head non-italic flex items-center justify-center gap-3 text-center uppercase text-primary">
                <Image
                  src="/images/left.png"
                  alt="left"
                  width={44}
                  height={12}
                  className="about-arrow w-fit"
                  style={{
                    transform: "scale(0.5)",
                  }}
                />
                <span className="head-welcome">
                  {text.split("").map((char, index) => (
                    <span key={index} className="key head-welcome">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
                <Image
                  src="/images/right.png"
                  alt="right"
                  width={44}
                  height={12}
                  className="about-arrow h-fit w-fit"
                  style={{
                    transform: "scale(0.5)",
                  }}
                />
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center lg:w-1/2">
            <div className="flex flex-col items-center gap-5">
              <p className="welcome-two w-full text-center capitalize text-[#AAA9A9] md:-ml-[50px] md:w-[730px]">
                catering available (whether it’s a wedding, a birthday, an
                anniversary or just an excuse for family and friends to get
                together, we are here for you. Depending on your requirements,
                we can create a menu that will surely impress your guests with
                an unmatched culinary experience), BBQs (why not enjoy an
                authentic Halal Turkish BBQ in your own private setting where
                our chefs will come along with our freshly prepared food and
                cook it fresh for you and your guests to enjoy straight off the
                grill), private dining room/conferencing room available (whether
                you need to hold a private work meeting or you have a special
                occasion to celebrate, we have the perfect setting for you. Set
                aside from our main dining area with it’s own dedicated space
                capable of accommodating up to 50 guests (we can do more if
                needed where others can be seated in the main dining area at
                dinner time), this is the perfect setting for you to enjoy a
                celebratory meal with loved ones or even impress clients and
                make them feel special. The atmosphere, setting and food sets us
                apart and will definitely impress your guests), set menus
                available upon request (these can be tailor-made to your
                specifications based on your party size and dietary
                requirements)
              </p>
            </div>
          </div>
        </div>
        <div className="z-30 flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-5 lg:items-center lg:gap-9">
          <div className="flex w-full flex-col items-center justify-center gap-10 lg:w-1/2">
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <p className="styled_section_head non-italic flex items-center justify-center gap-3 text-center uppercase text-primary">
                <Image
                  src="/images/left.png"
                  alt="left"
                  width={44}
                  height={12}
                  className="about-arrow w-fit"
                  style={{
                    transform: "scale(0.5)",
                  }}
                />
                <span className="head-welcome">
                  {text1.split("").map((char, index) => (
                    <span key={index} className="key head-welcome">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
                <Image
                  src="/images/right.png"
                  alt="right"
                  width={44}
                  height={12}
                  className="about-arrow h-fit w-fit"
                  style={{
                    transform: "scale(0.5)",
                  }}
                />
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center lg:w-1/2">
            <div className="flex flex-col items-center gap-5">
              <p className="welcome-two w-full text-center capitalize text-[#AAA9A9] md:-ml-[50px] md:w-[730px]">
                prayer room (anyone can use), parking options (free on-site car
                park for customers [just validate your parking in-store]),
                takeaway/delivery menu, reason for name Mevlana (Halil is from
                Konya, the birthplace of Mevlana Rumi, a Turkish Sufi gnostic,
                and as we were aiming to nourish our customers heart and soul
                through food, it seemed only appropriate that we name it after
                Mevlana Rumi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parking;
