import Footer from "@/components/Footer";
import Shisha from "../shisha/(section)/Shisha";
import Navbar from "@/components/NavBar";
import Map from "./(section)/Map";


const page = ({ }) => {
    return (
        <main className="relative flex h-full w-full bg-[#070d0f]">
            <div className="flex h-full w-full flex-col items-center justify-center">
                <Navbar />
                <Shisha />
                <Map />
                <Footer />
            </div>
        </main>
    );
};

export default page;
