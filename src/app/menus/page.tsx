import Footer from "@/components/Footer";
import Map from "./(section)/Map";
import Menu from "./(section)/Menu";
import Navbar from "@/components/Navbar";

const page = ({}) => {
  return (
    <main className="relative flex h-full w-full bg-[#070d0f]">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar />
        <Menu />
        <Map />
        <Footer />
      </div>
    </main>
  );
};

export default page;
