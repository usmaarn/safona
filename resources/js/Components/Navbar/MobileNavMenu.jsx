import MenuSection from "./MenuSection";
import { IoMdClose } from 'react-icons/io'
import SearchBar from "../SearchBar";

export default function MobileNavMenu({ onClick }) {

    window.onresize = () => {
        console.log('Window resized');
    }

    return (
        <div className={`mobile-menu ${open ? '' : 'hidden'}`}>
            <div className="top">
                <a href="#" className="logo">safona media</a>
                <button className="text-h1" onClick={onClick}>
                    <IoMdClose />
                </button>
            </div>
            <div className="auth">
                <a href={route('login')} className="login-btn">Sign In</a>
                <a href={route('register')} className="login-btn">Register</a>
            </div>

            <SearchBar />

            <MenuSection />

        </div>
    )
}
