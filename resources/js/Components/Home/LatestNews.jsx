import { timeAgo } from '@/helpers/dateFormatter';
import { PostLink, CatLink } from "@/Components/Links";

export default function LatestNews({ posts }) {

    return (
        <section className="latest-news">
            <h2 className="heading">latest news</h2>
            <div className="posts">
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <a href={route('post.show', post.slug)} className="post-thumbnail">
                            <img src={post.thumbnail} alt="News Image" className="w-full" />
                        </a>
                        <PostLink text={post.title} slug={post.slug} className='post-title' />
                        <div className="post-meta">
                            <CatLink text="Category" slug='cat' className="post-tag" />
                            <p className="post-date">
                                {timeAgo(post.created_at)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}