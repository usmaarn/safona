import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";

export default function Layout({children}) {
    return(
        <div>
            <Navbar />
            <div className="">
                {children}
            </div>
            <Footer />
        </div>
    )
}
