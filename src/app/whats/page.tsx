import Navbar from "@/components/NavBar"
import Calender from "./(section)/Calender"

const page = ({ }) => {
    return (
        <section className="w-full flex flex-col">
            <Navbar />
            <Calender />
        </section>
    )
}

export default page