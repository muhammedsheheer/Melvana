"use client";
import Hero from "./(section)/Hero";
import Welcome from "./(section)/Welcome";
import Footer from "@/components/Footer";
import Reviews from "./(section)/Review";
import ConnectWithUs from "./(section)/ConnectWithUs";
import Contact from "./(section)/Contact";
import Latest from "./(section)/Latest";
import Reserve from "./(section)/Reserve";
import Imagecontainer from "./(section)/Image";
import Ambiance from "./(section)/Ambiance";
import Tips from "./(section)/Tips";
import { VideoCarousel } from "./(section)/Videos";
import Menu from "./(section)/Menu";
import ViewMenu from "@/components/floating-buttons/ViewMenu";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Special from "./(section)/(special)/Special";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center overflow-x-hidden">
        <Navbar position="fixed" />
        <Hero />
        {/* <Latest /> */}
        <Welcome />
        <Ambiance />
        <Special />
        {/* <VideoCarousel /> */}
        <Reserve />
        <Tips />
        <Reviews />
        {/* <Imagecontainer /> */}
        {/* <Menu /> */}
        {/* <Menu /> */}
        {/* <Reservation /> */}
        {/* <Flavour /> */}
        {/* <Testimonials /> */}
        {/* <Map /> */}
        <ConnectWithUs />
        <Contact />
        <Footer />
      </div>
      {isScrolled && (
        <div className="fixed bottom-6 right-2 z-50 flex md:bottom-[54px] md:right-[48px]">
          <ViewMenu />
        </div>
      )}
    </main>
  );
}
