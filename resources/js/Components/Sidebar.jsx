
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import { timeAgo } from '@/helpers/dateFormatter'
import { BsDot } from 'react-icons/bs'
import { CatLink, TagLink } from './Links';

export default function Sidebar() {

    const { latestPosts, popularPosts } = usePage().props;

    return (
        <aside className="sticky top-10 space-y-10">

            <div className="">
                <h3 className="text-h3 uppercase font-semibold mb-3">more news</h3>
                <div className="space-y-2">
                    {latestPosts.map(post => (
                        <div key={post.id} className="py-2 border-b">
                            <h3 className="post-title">
                                <a href={route('post.show', post.slug)} className="hover:underline">
                                    {post.title}
                                </a>
                            </h3>
                            <div className="flex items-center gap-1 mt-2 text-sm text-dark/70">
                                <CatLink text='World' slug='world' />
                                <BsDot />
                                <p className="post-date">
                                    {timeAgo(post.created_at)}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <div className="">
                <h3 className="text-h3 uppercase font-semibold mb-3">popular</h3>
                <div className="space-y-3">
                    {popularPosts.map(post => (
                        <div className="flex flex-nowrap gap-2" key={post.id}>
                            <div className="post-thumbnail bg-gray">
                                <div className=" w-[100px] h-[100px]">
                                    <img src={post.thumbnail} alt="news" className='wi-full' />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="post-title">
                                    <a href={route('post.show', post.slug)} className="hover:underline">
                                        {post.title}
                                    </a>
                                </h3>
                                <div className="flex items-center gap-1 mt-2 text-sm text-dark/70">
                                    <CatLink text='politics' slug='politics' />
                                    <BsDot />
                                    <p className="post-date">
                                        {timeAgo(post.created_at)}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </aside>

    )
}
