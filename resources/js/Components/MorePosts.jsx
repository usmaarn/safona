
import React from 'react'
import { BsDot } from 'react-icons/bs'

export default function MorePosts({ posts }) {

    if (!posts) return null;

    return (
        <div className="py-5 border-t">

            <h2 className='text-h2 font-semibold mb-5'>
                More From Author
            </h2>

            <div className='grid md:grid-cols-3 gap-y-10 gap-x-5'>
                {[1, 2, 3, 4, 5, 6].map(post => (
                    <div className='' key={post}>
                        <h3 className='text-h3  '>
                            <a href="#" className='hover:underline'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, obcaecati!
                            </a>
                        </h3>
                        <div className="flex items-center gap-2 font-semibold text-zinc-500 mt-2 text-sm">
                            <a href="#" className='hover:underline'>Politics</a>
                            <BsDot />
                            <p>23 hours ago</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
