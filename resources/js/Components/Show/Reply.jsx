import { BsHeart, BsHeartFill, BsThreeDots } from 'react-icons/bs';

function Reply({ reply }) {
    return (
        <div className="flex flex-nowrap gap-3 items-start p-5" >

            <div className="">
                <div className="w-12 h-12 bg-zinc-500 rounded-full">
                    <img src="" alt="" />
                </div>
            </div>

            <div className="space-y-3">

                <div className="flex">
                    <div>
                        <h3><a href="#">Usman Muhammad</a></h3>
                        <p className='text-p text-zinc-500'>12 hours ago</p>
                    </div>
                    <button className='ml-auto'>
                        <BsThreeDots className='text-h3' />
                    </button>
                </div>

                <p className='text-[1rem]'>
                    I would argue there. TS, while being a superset of js, can become its succesor. Just look at all the popular frameworks and libraries all are being ported to TS. Or in other word TS is replacing vanilla JS pretty much every where.
                </p>

                <div className="flex items-center gap-10">
                    <button className="flex items-center gap-1">
                        <BsHeart className="text-[1.5rem]" />
                        <span>33k</span>
                    </button>
                    <button className='ml-auto'>Reply</button>
                </div>
            </div>

        </div>
    );
}

export default Reply;