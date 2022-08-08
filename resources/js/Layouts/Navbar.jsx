import {RiSearch2Line, RiMenuLine} from 'react-icons/ri'
import {MdExpandMore} from 'react-icons/md'
import MobileNavMenu from "../Components/Navbar/MobileNavMenu";
import {useState} from "react";


export default function Navbar(){

    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(!open)

    return(
        <header className="navbar">
            <nav className="wrapper">

                <a className="logo" href="/">Safona Media</a>

                <ul className="navmenu">
                    <li><a href="#">News</a></li>
                    <li><a href="#">Politics</a></li>
                    <li><a href="#">Campus</a></li>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">More <MdExpandMore /></a></li>
                </ul>

                {open && <MobileNavMenu onClick={handleClick} />}

                <div className="right">
                    <button className="search-btn">
                        <RiSearch2Line />
                    </button>
                    <button className="menu-toggle-btn" onClick={handleClick}>
                        <RiMenuLine />
                    </button>
                    <a href="/login" className="login-btn">Sign In</a>
                </div>

            </nav>
        </header>
    )
}
