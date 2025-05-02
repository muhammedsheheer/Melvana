import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";
import { FaTiktok } from "react-icons/fa";

const Footer = ({}) => {
  return (
    <footer
      className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#0f1d22] px-2 pt-12"
      id="footer"
    >
      <div className="flex w-full max-w-[95%] flex-col items-center gap-4">
        <div className="flex w-full items-center justify-center gap-3">
          <div className="h-[1px] flex-grow bg-[#575346]" />
          <Image
            src="/images/logo.png"
            width={208}
            height={104}
            alt="logo"
            className="w-24"
          />
          <div className="h-[1px] flex-grow bg-[#575346]" />
        </div>
        <div className="flex w-full flex-col md:flex-row">
          <div className="grid w-full grid-cols-2 items-start justify-center gap-8 border-b-[1px] border-b-primary py-8 md:w-1/2 md:gap-4 md:border-b-0 md:border-r-[2px] md:border-r-[#575346] md:pl-2 md:pr-8 xl:grid-cols-3 xl:gap-5 xl:pr-10">
            <div className="font-open letter-[40px] flex w-full flex-col items-start justify-center uppercase tracking-[2px]">
              <Button
                variant="link"
                className="w-fit items-center justify-start px-0 py-0 text-start text-[16px] font-normal text-[#C9AB81]"
                asChild
              >
                <Link href="/">Home</Link>
              </Button>
              <Button
                variant="link"
                className="w-fit items-center justify-start px-0 py-0 text-start text-[16px] font-normal text-[#C9AB81]"
                asChild
              >
                <Link href="/menu">Menu</Link>
              </Button>
              <Button
                variant="link"
                className="w-fit items-center justify-start px-0 py-0 text-start text-[16px] font-normal text-[#C9AB81]"
                asChild
              >
                <Link href="/about-us">Our Story</Link>
              </Button>
              <Button
                variant="link"
                className="text-starttext-[16px] w-fit items-center justify-start px-0 py-0 font-normal text-[#C9AB81]"
                asChild
              >
                <Link
                  href="https://www.instagram.com/mevlana_bolton"
                  target="_blank"
                >
                  Gallery
                </Link>
              </Button>
            </div>

            <div className="font-open letter-[40px] flex w-full flex-col items-start justify-center pl-8 uppercase tracking-[2px]">
              {/* <Button
                variant="link"
                className="w-fit items-center justify-start px-0 py-0 text-start text-[16px] font-normal text-[#C9AB81]"
                asChild
              >
                <Link href="/contact">Blog</Link>
              </Button> */}
              {/* <Button
                variant="link"
                className="w-fit items-center justify-start px-0 py-0 text-start text-[16px] font-normal text-[#C9AB81]"
                asChild
              >
                <Link href="/contact">Press</Link>
              </Button> */}
              <Button
                variant="link"
                className="w-fit items-center justify-start px-0 py-0 text-start text-[16px] font-normal text-[#C9AB81]"
                asChild
              >
                <Link href="/contact">Contact us</Link>
              </Button>
              <Button
                variant="link"
                className="w-fit items-center justify-start px-0 py-0 text-start text-[16px] font-normal text-[#C9AB81]"
                asChild
              >
                <Link
                  target="_blank"
                  href="https://maps.app.goo.gl/GHVEYTBA5uk8voWR9"
                >
                  Find us
                </Link>
              </Button>
            </div>

            <div className="font-open flex w-full flex-col items-start justify-center uppercase leading-[40px] tracking-[2px]">
              <Button
                variant="link"
                className="w-fit items-center justify-start px-0 py-0 text-start text-[16px] font-normal text-[#C9AB81]"
                asChild
              >
                <Link href="/table-booking">Reservations</Link>
              </Button>
            </div>
          </div>
          <div className="grid-col-1 grid w-full items-start justify-center gap-3 py-8 uppercase md:w-1/2 md:flex-row md:gap-5 md:px-10 xl:grid-cols-2">
            <div className="flex w-full flex-col items-center justify-center gap-3 md:items-start md:pl-0 xl:pl-0">
              <p className="font-open letter-[24.51px] text-[18px] font-normal tracking-[3px] text-[#C9AB81]">
                Contact
              </p>
              <Link
                href="https://maps.app.goo.gl/GHVEYTBA5uk8voWR9"
                target="_blank"
                className="font-open w-fit items-center justify-center px-0 py-0 text-center text-[16px] font-normal leading-[27px] tracking-[2px] text-[#C9AB81] md:justify-start md:text-start"
              >
                Horsfield St, Bolton BL3 4LU, United Kingdom
                <br />
                info@mevlanabolton.com
                <br />
              </Link>
              <Link
                href="tel:+441204860038"
                className="font-open -mt-[8px] w-fit items-center justify-center px-0 py-0 text-center text-[16px] font-normal leading-[27px] tracking-[2px] text-[#C9AB81] md:justify-start md:text-start"
              >
                +44 1204 860038
              </Link>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-3 md:items-start md:pl-0 xl:pl-0">
              <p className="font-open letter-[24.51px] text-[18px] font-normal tracking-[3px] text-[#C9AB81]">
                Opening hours
              </p>
              <p className="font-open w-fit items-center justify-start px-0 py-0 text-center text-[16px] font-normal leading-[27px] tracking-[2px] text-[#C9AB81] md:justify-start md:text-start">
                Mon-Thu: 11:30am-10:00pm,
                <br />
                Fri-Sun: 11:30am-11:00pm
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 flex w-full flex-col items-center justify-center gap-3">
          <p className="font-open text-xl font-bold uppercase tracking-[2px] text-[#C9AB81]">
            Please Note
          </p>
          <p className="font-open w-[33ch] px-0 py-0 text-center font-normal uppercase leading-7 tracking-[1.88px] text-[#C9AB81] md:w-[40ch]">
            Our reservations will be held
            <br /> for 15 minutes after booking.
            <br />
            Our restaurant is family friendly
          </p>
        </div>
        <div className="mb-3 mt-6 flex w-full items-center justify-center gap-4 md:w-1/3">
          <Link
            target="_blank"
            className="text-[#C9AB81]"
            href="https://www.instagram.com/mevlana_bolton"
          >
            <Icons.instagram />
          </Link>
          <Link
            target="_blank"
            className="text-[#C9AB81]"
            href="https://maps.app.goo.gl/GHVEYTBA5uk8voWR9"
          >
            <Icons.google />
          </Link>
          <Link
            target="_blank"
            className="text-[#C9AB81]"
            href="https://www.tiktok.com/@mevlanabolton"
          >
            <FaTiktok size={28} />
          </Link>
          <Link
            target="_blank"
            className="text-[#C9AB81]"
            href="https://www.facebook.com/profile.php?id=61560019979761"
          >
            <Icons.facebook />
          </Link>
        </div>
      </div>
      <div className="flex w-full max-w-[95%] items-center justify-center border-t-[1px] border-t-[#575346] py-6">
        <p className="flex w-full flex-col items-center justify-center md:flex-row md:justify-between">
          <span className="font-opens text-primary">
            © 2025 Mevlana, all rights reserved
          </span>
          <Link
            href="https://foodo.ai"
            className="text-primary hover:underline"
            target="_blank"
          >
            Powered By Foodo
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
