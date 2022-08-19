import PageLayout from '@/Layouts/PageLayout';
import { timeAgo } from '@/helpers/dateFormatter';
import LoadMore from '@/Components/LoadMore';

export default function Search({ posts, query }) {
    return (
        <PageLayout title={'Result for: <b>'+query+'</b>'}>

            <div className="grid sm:grid-cols-2 gap-10">
                {posts.map(post => (
                    <div className="space-y-1" key={post.id}>
                        <div className="h-52 rounded bg-zinc-300">
                            <img src={post.thumbnail} alt=""
                                className="object-cover w-full h-full" />
                        </div>
                        <h3 className="">
                            <a href={route('post.show', post.slug)}>
                                {post.title}
                            </a>
                        </h3>
                        <div className="post-meta flex items-center text-p text-zinc-500 gap-5">
                            <p className="post-tag">
                                <a href="#">Politics</a>
                            </p>
                            <p className="post-date">{timeAgo(post.created_at)}</p>
                        </div>
                    </div>
                ))}
            </div>

            <LoadMore show={posts.length > 0} />

        </PageLayout>
    )
}