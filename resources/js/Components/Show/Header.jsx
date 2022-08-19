

import { BsDot } from 'react-icons/bs'
import SocialLinks from './SocialLinks'

export default function Header() {
    return (
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-5'>

            <div className='flex flex-nowrap gap-3 '>
                <div className="">
                    <div className="w-16 h-16 rounded-full shadow bg-zinc-300">
                        <img src="" alt="" />
                    </div>
                </div>

                <div className="">
                    <h3 className='font-bold text-h3'>
                        <a href="#">
                            Muhammad Uthman Busari
                        </a>
                    </h3>
                    <div className="flex items-center gap-1.5">
                        <p>Apr 1, 2022.</p>
                        <BsDot />
                        <p>3 mins read</p>
                    </div>

                </div>
            </div>

            <SocialLinks />

        </div>
    )
}
