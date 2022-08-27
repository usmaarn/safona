
import React from 'react'

export default function Header() {
    return (
        <div className="top">
            <h2 className='text-h2 space-x-1 font-semibold'>
                <a href="/">
                    <span className='text-zinc-600'>Safona</span>
                    <span className="text-red-500">Media</span>
                </a>
            </h2>
            <div className="close" id="close-btn">
                <span className="material-icons-sharp">
                    close
                </span>
            </div>
        </div>
    )
}
