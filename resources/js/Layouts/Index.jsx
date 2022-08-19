import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";


export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <div className="max-w-[1200px] mx-auto">
                {children}
            </div>
            <Footer />
        </div>
    )
}
