import { RiMenuLine } from 'react-icons/ri'
import { MdExpandMore } from 'react-icons/md'
import MobileNavMenu from "../Components/Navbar/MobileNavMenu";
import { useState } from "react";
import { useForm, usePage } from '@inertiajs/inertia-react';
import AuthMenu from './Navbar/AuthMenu';
import SearchBar from '../Components/SearchBar';


export default function Navbar() {

    const [open, setOpen] = useState(false)
    const { auth } = usePage().props;

    const { post } = useForm();
    const logout = () => post(route('logout'))

    const handleClick = () => setOpen(!open)

    return (
        <header className="navbar">

            <nav className="wrapper">

                <a className="logo" href="/">Safona Media</a>

                <ul className="navmenu">
                    <li><a href={route('cat.show', 'news')}>News</a></li>
                    <li><a href={route('cat.show', 'politics')}>Politics</a></li>
                    <li><a href={route('cat.show', 'campus')}>Campus</a></li>
                    <li><a href={route('cat.show', 'business')}>Business</a></li>
                    <li><a href={route('cat.show', 'sports')}>Sports</a></li>
                    <li><a>More <MdExpandMore /></a></li>
                </ul>

                {open && <MobileNavMenu onClick={handleClick} />}

                <div className="right">

                    <SearchBar />

                    <button className="menu-toggle-btn" onClick={handleClick}>
                        <RiMenuLine />
                    </button>
                    {auth
                        ? <AuthMenu />
                        : <a href="/login" className="login-btn">Sign In</a>
                    }
                </div>

            </nav>

        </header>
    )
}
