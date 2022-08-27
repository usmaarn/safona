import { BsHeart, BsHeartFill, BsChatSquareText, BsChatSquareTextFill } from 'react-icons/bs';
import SocialLinks from "@/Components/Show/SocialLinks";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { usePage } from '@inertiajs/inertia-react';

function BottomSection({ post, comments }) {

    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);
    const { auth } = usePage().props;

    useEffect(() => {
        if (auth) {
            axios.get(route('post.liked', post))
                .then(res => setLiked(res.data.liked))
        }
        axios.get(route('post.likes', post))
            .then(res => setLikes(res.data.likes))
    }, [liked])

    const handleClick = async () => {
        if (!auth) return alert('please log in to like this post');
        let res = await axios.post(route('post.like.toggle', post));
        setLiked(res.data.liked);
    }

    return (
        <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center justify-between border-b pb-10">
            <div className="flex items-center gap-10">
                <button className="flex items-center gap-1" onClick={handleClick}>
                    {liked ?
                        <BsHeartFill className="text-[1.5rem] text-red-400" />
                        : <BsHeart className="text-[1.5rem]" />
                    }
                    <span>{likes}</span>
                </button>
                <div className="flex items-center gap-1">
                    <BsChatSquareText className="text-[1.5rem]" />
                    <span>{comments}</span>
                </div>
            </div>
            <SocialLinks />
        </div>
    );
}

export default BottomSection;