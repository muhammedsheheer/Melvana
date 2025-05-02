import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Gallery from "./(section)/Gallery";

const page = ({}) => {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar />
        <Gallery />
        <Footer />
      </div>
    </main>
  );
};

export default page;
