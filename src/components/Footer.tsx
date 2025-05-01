import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({ }) => {
  return (
    <footer className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#0f1d22] px-2 pt-12" id="footer">
      <div className="flex w-full max-w-[95%] flex-col items-center gap-4">
        <div className="flex w-full items-center justify-center gap-3">
          <div className="h-[1px] flex-grow bg-[#575346]" />
          <Image
            src="/images/home/logo.png"
            width={55}
            height={69}
            alt="logo"
          />
          <div className="h-[1px] flex-grow bg-[#575346]" />
        </div>
        <div className="flex w-full flex-col md:flex-row">
          <div className="grid w-full grid-cols-2 items-start justify-center gap-8  xl:gap-5  md:gap-4 border-b-[1px] border-b-primary py-8 md:w-1/2  xl:grid-cols-3 md:border-b-0 md:border-r-[2px] md:border-r-[#575346] md:pr-8 md:pl-2 xl:pr-10">
            <div className="flex w-full flex-col items-start justify-center uppercase font-open tracking-[2px] letter-[40px]">
              <Button
                variant="link"
                className="w-fit items-center justify-start px-0 py-0 text-start text-[16px] font-normal text-[#C9AB81]"
                asChild
              >
                <Link href="/our-food">Our Food</Link>
              </Button>
              <Button
                variant="link"
                className="w-fit items-center justify-start px-0 py-0 text-start text-[16px] font-normal text-[#C9AB81]"
                asChild
              >
                <Link href="/drinks">Drinks menu</Link>
              </Button>
              <Button
                variant="link"
                className="w-fit items-center justify-start px-0 py-0 text-start text-[16px] font-normal text-[#C9AB81]"
                asChild
              >
                <Link href="/contact">Private Hire</Link>
              </Button>
              <Button
                variant="link"
                className="w-fit items-center justify-start px-0 py-0 text-start text-[16px] font-normal text-[#C9AB81]"
                asChild
              >
                <Link href="/contact">What’s on</Link>
              </Button>
              <Button
                variant="link"
                className="w-fit items-center justify-start px-0 py-0 text-starttext-[16px] font-normal text-[#C9AB81]"
                asChild
              >
                <Link
                  href="https://www.instagram.com/vulounge?igsh=MXNveGEzZnhsNzJhYg=="
                  target="_blank"
                >
                  Gallery
                </Link>
              </Button>
            </div>

            <div className="flex w-full flex-col items-start pl-8 justify-center uppercase font-open tracking-[2px] letter-[40px]">
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
                <Link href="/contact">Career</Link>
              </Button>
              <Button
                variant="link"
                className="w-fit items-center justify-start px-0 py-0 text-start text-[16px] font-normal text-[#C9AB81]"
                asChild
              >
                <Link href="https://maps.app.goo.gl/BggC5TfsA6JG6suV9">Find us</Link>
              </Button>
            </div>

            <div className="flex w-full flex-col items-start  justify-center uppercase font-open tracking-[2px] leading-[40px]">
              <Button
                variant="link"
                className="w-fit items-center justify-start px-0 py-0 text-start text-[16px] font-normal text-[#C9AB81]"
                asChild
              >
                <Link href="/contact">Birthday Bookings</Link>
              </Button>
              <Button
                variant="link"
                className="w-fit items-center justify-start px-0 py-0 text-start text-[16px] font-normal text-[#C9AB81]"
                asChild
              >
                <Link href="/contact">Corporate events</Link>
              </Button>
              <Button
                variant="link"
                className="w-fit items-center justify-start px-0 py-0 text-start text-[16px] font-normal text-[#C9AB81]"
                asChild
              >
                <Link href="/contact">Christmas parties</Link>
              </Button>
              <Button
                variant="link"
                className="w-fit items-center justify-start px-0 py-0 text-start text-[16px] font-normal text-[#C9AB81]"
                asChild
              >
                <Link href="/contact">Venue Hire</Link>
              </Button>
            </div>
          </div>
          <div className="grid w-full grid-col-1 items-start justify-center gap-3 gap-3  md:gap-5 py-8 md:w-1/2 md:flex-row md:px-10 uppercase xl:grid-cols-2 ">
            <div className="flex w-full flex-col items-center justify-center gap-3  md:items-start md:pl-8 xl:pl-10 ">
              <p className="font-open text-[18px] tracking-[3px] letter-[24.51px] font-normal text-[#C9AB81]">
                Contact
              </p>
              <Link
                href="https://maps.app.goo.gl/D8eQzDhYmqMcdKcA8"
                className="w-fit items-center justify-center px-0 py-0 text-center font-open text-[16px] font-normal tracking-[2px] leading-[27px] text-[#C9AB81] md:justify-start md:text-start"
              >
                Country Club, High Street, <br />
                Bushey, WD23 1TT
                <br />
                info@vulounge.co.uk
                <br />
              </Link>
              <Link
                href="tel:01923862351"
                className="w-fit items-center -mt-[8px] justify-center px-0 py-0 text-center font-open text-[16px] font-normal tracking-[2px] leading-[27px] text-[#C9AB81] md:justify-start md:text-start"
              >
                01923 862351
              </Link>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-3  md:items-start md:pl-8 xl:pl-10">
              <p className="font-open text-[18px] tracking-[3px] letter-[24.51px] font-normal text-[#C9AB81]">
                Opening hours
              </p>
              <p className="w-fit items-center justify-start px-0 py-0 text-center font-open text-[16px] font-normal tracking-[2px] leading-[27px] text-[#C9AB81] md:justify-start md:text-start">
                Mon-Thurs 4pm-12am
                <br />
                Fri-Sat 4pm-2:am <br /> Sun 4pm-12am
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 flex w-full flex-col items-center justify-center gap-3">
          <p className="font-open text-xl tracking-[2px] font-bold uppercase text-[#C9AB81]">
            Please Note
          </p>
          <p className=" px-0 py-0 text-center uppercase font-open leading-7 tracking-[1.88px] font-normal text-[#C9AB81] w-[33ch] md:w-[40ch]">
            Our reservations will be held
            <br /> for 15 minutes after booking.
            <br />
            Our Lounge seating area is 18+
            <br />
            Our restaurant is family friendly
          </p>
        </div>
        <div className="flex mt-6 mb-3 w-full items-center justify-center gap-4 md:w-1/3">
          <Link
            className="text-[#C9AB81]"
            href="https://www.instagram.com/vulounge?igsh=MXNveGEzZnhsNzJhYg=="
          >
            <Icons.instagram />
          </Link>
          <Link className="text-[#C9AB81]" href="https://www.tripadvisor.com/Restaurant_Review-g1791615-d19258647-Reviews-Vu_Lounge-Bushey_Hertfordshire_England.html">
            <Icons.tripAdvisor />
          </Link>
          <Link
            className="text-[#C9AB81]"
            href="https://www.google.co.in/search?q=vu+lounge&sca_esv=cc3bedc69ac23800&sxsrf=ADLYWIKr1wXU6P_7HRL5yJxU8MpOEMVf-A%3A1734543055616&source=hp&ei=zwZjZ_avI97Q1e8PpdKv-A4&iflsig=AL9hbdgAAAAAZ2MU3xwRiPiihs6wOHdKn8Nv5k1kA6Ca&gs_ssp=eJzj4tVP1zc0zDAvNqyMN04zYLRSNagwsTA3MzQ1SzZJTLFITDNJsjKoSDY3SEs1TDEzNzA3MrZINvDiLCtVyMkvzUtPBQBLDBKJ&oq=vu+lounge&gs_lp=Egdnd3Mtd2l6Igl2dSBsb3VuZ2UqAggAMgsQLhiABBjHARivATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEjWHVAAWMEQcAB4AJABAJgBeKAB1weqAQMxLji4AQPIAQD4AQGYAgmgAoYIwgIKECMYgAQYJxiKBcICBRAuGIAEwgIIEAAYgAQYsQPCAg4QLhiABBixAxjRAxjHAcICCBAuGIAEGOUEmAMAkgcDMC45oAf3Sg&sclient=gws-wiz"
          >
            <Icons.google />
          </Link>
          <Link
            className="text-[#C9AB81]"
            href="https://www.facebook.com/VuLounge1?mibextid=ZbWKwL"
          >
            <Icons.facebook />
          </Link>
        </div>
      </div>
      <div className="flex w-full max-w-[95%] items-center justify-center border-t-[1px] border-t-[#575346] py-6">
        <p className="flex w-full flex-col items-center justify-center md:flex-row md:justify-between">
          <span className="font-opens text-primary">
            © 2025 VU Lounge,all rights reserved
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
