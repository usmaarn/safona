import { FaLinkedinIn, FaTwitter, FaFacebook, FaLink, FaBookmark } from 'react-icons/fa'
import { BsBookmarkCheck } from 'react-icons/bs'

export default function SocialLinks() {
    return (
        <div className="flex items-center gap-5 text-[1.3rem] text-zinc-600">
            <a href="#">
                <FaLinkedinIn />
            </a>
            <a href="#">
                <FaTwitter />
            </a>
            <a href="#">
                <FaFacebook />
            </a>
            <a href="#">
                <FaLink />
            </a>

            <button href="#" className='ml-10'>
                <BsBookmarkCheck />
            </button>

        </div>
    )
}
