import Contact from "@/app/contact/(section)/Contact";
// import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const page = ({}) => {
  return (
    <main className="relative flex h-full w-full">
      <div
        className="flex h-full w-full flex-col items-center justify-center bg-[#f7f4ed]"
        style={{
          backgroundImage: "url('/images/aboutbg.png')",
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
        }}
      >
        <Navbar position="absolute" />
        {/* <div
          className="h-[15vh] w-full bg-[#fff]"
          id="hero"
          style={{
            backgroundImage: "url('/images/aboutbg.png')",
            backgroundSize: "contain",
            backgroundRepeat: "repeat",
          }}
        ></div> */}
        <Contact />
        {/* <FAQ /> */}
        <Footer />
      </div>
    </main>
  );
};

export default page;
