import { FaLinkedinIn, FaTwitter, FaFacebook, FaLink } from 'react-icons/fa'
import { BsBookmark, BsBookmarkCheck, BsBookmarkCheckFill, BsBookmarkXFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { usePage } from '@inertiajs/inertia-react';
import ClickAwayListener from 'react-click-away-listener';

export default function SocialLinks() {

    const [bookmarked, setBookMarked] = useState(false);
    const [open, setOpen] = useState(false);
    const { post, auth } = usePage().props;
    const postLink = route('post.show', post.slug);

    const copy = () => {
        navigator.clipboard.writeText(postLink);
        setOpen(true);
        setTimeout(() => setOpen(false), 1000)
    }

    useEffect(() => {
        auth && axios.get(route('post.bookmarked', post.slug))
            .then(res => setBookMarked(res.data.bookmarked))
    }, [])

    const handleClick = async () => {
        if (!auth) return alert('please log in to bookmark this post');
        let res = await axios.post(route('post.bookmark.toggle', post))
        setBookMarked(res.data.bookmarked);
    }

    return (
        <div className="flex items-center gap-5 text-[1.3rem] text-zinc-600">
            <a href="#">
                <FaLinkedinIn />
            </a>
            <a target="_blank" href={"https://twitter.com/intent/tweet?text=" + postLink}>
                <FaTwitter />
            </a>
            <a href="#">
                <FaFacebook />
            </a>

            <button onClick={copy} className="relative">
                {open && <span className='absolute bottom-full px-3 p-1 bg-black text-white text-sm'>copied</span>}
                <FaLink />
            </button>

            <button className='ml-10' onClick={handleClick}
                title={bookmarked ? 'bookmarked' : 'bookmark'}>
                {bookmarked
                    ? <BsBookmarkXFill />
                    : <BsBookmarkCheck />
                }
            </button>

        </div>
    )
}