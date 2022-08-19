
import React from 'react'

export default function SideNavItem({ link, text, icon }) {
    return (
        <a href={link} className="flex items-center gap-3 py-3 hover:translate-x-5 hover:text-blue-500 hover:no-underline transition-all duration-300 text-zinc-500">
            <span className='text-h2'>{icon}</span>
            <h3>{text}</h3>
        </a>
    )
}
