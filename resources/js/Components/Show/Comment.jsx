import { RiReplyLine } from 'react-icons/ri';
import { BsHeart, BsHeartFill, BsThreeDots } from 'react-icons/bs';
import Reply from "./Reply";
import date from '@/helpers/date'

function Comment({ comment }) {
    return (
        <div className="space-y-3 border-y p-3">

            <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-zinc-500 rounded-full">
                    <img src="" alt="" />
                </div>
                <div>
                    <h3>
                        <a href="#">
                            {comment.user.firstname + ' ' + comment.user.lastname}
                        </a>
                    </h3>
                    <p className='text-p text-zinc-500'>
                        {date.date_diff(comment.created_at)}
                    </p>
                </div>
                <button className='ml-auto'>
                    <BsThreeDots className='text-h3' />
                </button>
            </div>

            <p className='text-[1rem] font-light '>
                {comment.body}
            </p>

            <div className="flex items-center gap-10">
                <button className="flex items-center gap-1">
                    <BsHeart className="text-[1.5rem]" />
                    <span>33k</span>
                </button>
                <div className="flex items-center gap-1">
                    <RiReplyLine className="text-[1.5rem]" />
                    <span>34</span>
                </div>
                <button className='ml-auto'>Reply</button>
            </div>

            <div className="replies">
                {[1].map(reply => (
                    <Reply reply={reply} key={reply} />
                ))}
            </div>

        </div>

    );
}

export default Comment;