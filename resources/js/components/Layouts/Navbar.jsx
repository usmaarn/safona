import {Link} from "@inertiajs/inertia-react";

export default function Navbar(){
    return(
        <nav className="h-[70px] border-b px-5">
            <div className="max-w-[1100px] mx-auto flex items-center justify-between gap-5 h-full">

                <Link href="/">
                    <span className="magisho text-2xl">Safona</span>
                </Link>

                <ul className="hidden md:flex items-center gap-5">
                    <li>Politics</li>
                    <li>Campus</li>
                    <li>Entertainment</li>
                    <li>World</li>
                    <li>More</li>
                </ul>

                <a href={route('login')} className="border px-5 py-2 rounded-lg text-sm">Login</a>

            </div>
        </nav>
    )
}
