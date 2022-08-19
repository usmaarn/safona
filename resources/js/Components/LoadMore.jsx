import { BsChevronCompactDown } from 'react-icons/bs';

export default function LoadMore({ show, onClick }) {
    if (!show) return null;

    return (
        <button onClick={onClick}
            className='py-2 w-full border bg-zinc-100 flex items-center gap-1 justify-center'>
            <span>Load More</span>
            <BsChevronCompactDown />
        </button>
    )
}
