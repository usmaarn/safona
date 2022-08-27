import Header from "./Header";
import SideNavItem from "./SideNavItem";
import { MdOutlineDashboard, MdLogout, MdOutlineCategory } from 'react-icons/md'
import { TbTags, TbSettings, TbUser, TbUsers } from 'react-icons/tb'
import { BsChatSquareText, BsCameraVideo, BsFileEarmarkPost } from 'react-icons/bs'

export default function Sidebar() {
    return (
        <aside className="h-screen px-5 py-10 flex flex-col gap-10 bg-white border-r">

            <Header />

            <div className="sidenav-menu flex-grow flex flex-col">

                <SideNavItem link="#" icon={<MdOutlineDashboard />} text="Dashboard" />
                <SideNavItem link="#" icon={<BsFileEarmarkPost />} text="Posts" />
                <SideNavItem link="#" icon={<MdOutlineCategory />} text="Categories" />
                <SideNavItem link="#" icon={<TbTags />} text="Tags" />
                <SideNavItem link="#" icon={<TbUsers />} text="Users" />
                <SideNavItem link="#" icon={<BsChatSquareText />} text="Comments" />
                <SideNavItem link="#" icon={<BsCameraVideo />} text="Videos" />
                <SideNavItem link="#" icon={<TbUser />} text="Profile" />
                <SideNavItem link="#" icon={<TbSettings />} text="Settings" />

                <button className="mt-auto flex items-center gap-2 text-red-500">
                    <MdLogout className="text-h2" />
                    <h3>Logout</h3>
                </button>

            </div>

        </aside>
    )
}