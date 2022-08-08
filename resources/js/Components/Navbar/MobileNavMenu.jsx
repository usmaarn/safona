import MenuSection from "./MenuSection";
import {IoMdClose} from 'react-icons/io'

export default function MobileNavMenu({onClick}){

    window.onresize = () => {
        console.log('Window resized');
    }

    return(
        <div className={`mobile-menu ${open ? '' : 'hidden'}`}>
            <div className="top">
                <a href="#" className="logo">safona media</a>
                <button className="text-h1" onClick={onClick}>
                    <IoMdClose />
                </button>
            </div>
            <div className="auth">
                <a href="#" className="login-btn">Sign In</a>
                <a href="#" className="login-btn">Register</a>
            </div>

            <MenuSection />

        </div>
    )
}
