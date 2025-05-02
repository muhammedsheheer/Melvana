import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Parking from "./(section)/Parking";

const page = ({}) => {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar />
        <Parking />
        <Footer />
      </div>
    </main>
  );
};

export default page;
