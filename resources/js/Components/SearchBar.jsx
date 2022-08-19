import React from 'react'
import { RiSearch2Line } from 'react-icons/ri'

export default function SearchBar() {
    return (
        <form action={route('search')} className="search-menu">
            <div className="wrapper">
                <input type="text" placeholder='Search...' name='q' />
                <button className="search-btn">
                    <RiSearch2Line />
                </button>
            </div>
        </form>
    )
}
