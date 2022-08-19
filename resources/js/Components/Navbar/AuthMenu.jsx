import { useState } from "react"
import { FaUser } from 'react-icons/fa'
import { BsChevronDown } from 'react-icons/bs'
import { TbDashboard } from 'react-icons/tb'
import { FiSettings } from 'react-icons/fi'
import { HiOutlineLogout } from 'react-icons/hi'
import { useForm } from "@inertiajs/inertia-react"
import { CSSTransition } from "react-transition-group"
import ClickAwayListener from "react-click-away-listener"



export default function AuthMenu() {

    const [open, setOpen] = useState(false);
    const { post } = useForm();
    const logout = () => post(route('logout'));

    return (
        <div className="relative">

            <button className="flex items-center gap-2" onClick={() => setOpen(true)}>
                <FaUser className="w-10 h-10 rounded-full shadow bg-zinc-200 p-2" />
                <BsChevronDown />
            </button>


            <CSSTransition in={open} timeout={200} classNames='my-node' unmountOnExit>
                <ClickAwayListener onClickAway={() => setOpen(false)}>
                    <div className="absolute top-[120%] shadow p-2 rounded border right-0 bg-white">
                        <a href="/dashboard" className="px-3 py-1.5 rounded flex items-center gap-2 hover:bg-gray-200">
                            <TbDashboard className="text-h3" /> Dashboard
                        </a>
                        <a href="/Dashboard" className="px-3 py-1.5 rounded flex items-center gap-2 hover:bg-gray-200">
                            <FaUser className="text-h3" /> Profile
                        </a>
                        <a href="/Dashboard" className="px-3 py-1.5 rounded flex items-center gap-2 hover:bg-gray-200">
                            <FiSettings className="text-h3" /> Settings
                        </a>
                        <button onClick={logout} className="px-3 py-1.5 rounded flex items-center gap-2 w-full text-red-500 hover:bg-red-400 hover:text-white">
                            <HiOutlineLogout className="text-h3" /> Logout
                        </button>
                    </div>
                </ClickAwayListener>
            </CSSTransition>
        </div >
    )
}
