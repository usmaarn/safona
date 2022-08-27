import MenuSection from "./MenuSection";
import { IoMdClose } from 'react-icons/io'
import SearchBar from "../SearchBar";
import { usePage } from "@inertiajs/inertia-react";

export default function MobileNavMenu({ onClick }) {

    const { auth } = usePage().props;

    return (
        <div className={`mobile-menu ${open ? '' : 'hidden'}`}>
            <div className="top">
                <a href="#" className="logo">safona media</a>
                <button className="text-h1" onClick={onClick}>
                    <IoMdClose />
                </button>
            </div>
            {!auth && <div className="auth">
                <a href={route('login')} className="login-btn">Sign In</a>
                <a href={route('register')} className="login-btn">Register</a>
            </div>}

            <SearchBar />

            <MenuSection />

        </div>
    )
}
