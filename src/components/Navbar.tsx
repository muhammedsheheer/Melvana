"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import clsx from "clsx";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const d = localStorage.getItem("positiond");
    if (d !== null) {
      setPositiond(d);
    }
  }, []);
  const [positiond, setPositiond] = useState<string>("");
  useEffect(() => {
    if (positiond) {
      localStorage.setItem("positiond", positiond);
    }
  }, [positiond]);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={cn(
        `${position} top-0 z-50 h-[10vh] w-full pt-4 md:pt-10`,
        pathname === "/" ? "bg-transparent" : "pt-4 md:pt-5",
      )}
    >
      {/*big screen */}
      <div className="hidden px-4 md:block md:px-12">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={"/images/home/hero/logo.png"}
                width={281}
                height={74}
                alt="logo"
                className="w-32"
              />
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center gap-20">
            <Link
              href={"/"}
              className={
                pathname === "/" || pathname === "/table-booking"
                  ? "text-center font-playfair text-xs font-[600] uppercase tracking-[0.96px] text-[#fff]"
                  : "text-center font-playfair text-xs font-[600] uppercase tracking-[0.96px] text-[#000]"
              }
            >
              Home
            </Link>
            <Link
              href={"/menu"}
              className={
                pathname === "/" || pathname === "/table-booking"
                  ? "text-center font-playfair text-xs font-[600] uppercase tracking-[0.96px] text-[#fff]"
                  : "text-center font-playfair text-xs font-[600] uppercase tracking-[0.96px] text-[#000]"
              }
            >
              Menu
            </Link>
            {/* <Link
              href={""}
              className={
                pathname === "/"
                  ? "text-center font-playfair text-xs font-[600] uppercase tracking-[0.96px] text-[#fff]"
                  : "text-center font-playfair text-xs font-[600] uppercase tracking-[0.96px] text-[#000]"
              }
            >
              FOOD & DRINK
            </Link> */}
            <Link
              href={"/about-us"}
              className={
                pathname === "/" || pathname === "/table-booking"
                  ? "text-center font-playfair text-xs font-[600] uppercase tracking-[0.96px] text-[#fff]"
                  : "text-center font-playfair text-xs font-[600] uppercase tracking-[0.96px] text-[#000]"
              }
            >
              Our Story
            </Link>

            <Link
              href={"/contact"}
              className={
                pathname === "/" || pathname === "/table-booking"
                  ? "text-center font-playfair text-xs font-[600] uppercase tracking-[0.96px] text-[#fff]"
                  : "text-center font-playfair text-xs font-[600] uppercase tracking-[0.96px] text-[#000]"
              }
            >
              Contact
            </Link>
          </div>
          <div>
            <Button className="rounded-none bg-[#A98151] px-5 py-6 text-center font-cormorant text-xs font-[700] uppercase tracking-[4px] text-[#fff] hover:bg-[#e9b87c] md:px-7 md:py-7 md:text-sm">
              <Link href={"/table-booking"}>Book Now</Link>
            </Button>
          </div>
        </div>
      </div>

      {/*mobile screen */}
      <div className="block px-4 md:hidden md:px-20">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={"/images/home/hero/logo.png"}
                width={281}
                height={74}
                alt="logo"
                className="w-20"
              />
            </Link>
          </div>
          <div>
            <Sidebar>
              <Button
                variant="ghost"
                className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
              >
                <div className="flex flex-row gap-2">
                  <EqualizerIcon />
                </div>
              </Button>
            </Sidebar>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="equalizer-icon rotate">
      <div
        className={clsx("bar", pathname === "/" ? "bg-[#fff]" : "bg-[#194129]")}
      ></div>
      <div
        className={clsx("bar", pathname === "/" ? "bg-[#fff]" : "bg-[#194129]")}
      ></div>
      <div
        className={clsx("bar", pathname === "/" ? "bg-[#fff]" : "bg-[#194129]")}
      ></div>
    </div>
  );
};
