import { RiReplyLine } from 'react-icons/ri';
import { BsHeart, BsHeartFill, BsThreeDots } from 'react-icons/bs';
import Reply from "./Reply";
import date from '@/helpers/date'

function Comment({ comment }) {
    return (
        <div className="border-y p-3 flex gap-3">

            <div className="">
                <div className="w-12 h-12 bg-zinc-500 rounded-full">
                    <img src="" alt="" />
                </div>
            </div>

            <div className="flex-grow flex flex-col gap-3">
                <div className='flex justify-between items-center'>
                    <div className="">
                        <h3>
                            <a href="#">
                                {comment.user.firstname + ' ' + comment.user.lastname}
                            </a>
                        </h3>
                        <p className='text-p text-zinc-500'>
                            {date.date_diff(comment.created_at)}
                        </p>
                    </div>
                    <button className=''>
                        <BsThreeDots className='text-h3' />
                    </button>
                </div>

                <p className='text-[1rem] font-light'>
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
                    {/* <button className='ml-auto'>Reply</button> */}
                </div>

            </div>
            {/* <div className="replies">
                {[1].map(reply => (
                    <Reply reply={reply} key={reply} />
                ))}
            </div> */}

        </div>

    );
}

export default Comment;