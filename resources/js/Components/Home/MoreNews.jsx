import { timeAgo } from '@/helpers/dateFormatter';
import { PostLink, CatLink } from "@/Components/Links";

export default function MoreNews({ posts }) {
    return (
        <section className="more-news">

            <div className="news">
                <h3 className="heading">career</h3>
                <div className="posts">
                    {posts.map(post => (
                        <div key={post.id} className="post">
                            <h3 className="post-title">
                                <a href={route('post.show', post.slug)}>
                                    {post.title}
                                </a>
                            </h3>
                            <div className="post-meta">
                                <p className="post-tag">
                                    <a href="#">Politics</a>
                                </p>
                                <p className="post-date">{timeAgo(post.created_at)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="news">
                <h3 className="heading">career</h3>
                <div className="posts">
                    {posts.map(post => (
                        <div key={post.id} className="post">
                            <h3 className="post-title">
                                <a href={route('post.show', post.slug)}>
                                    {post.title}
                                </a>
                            </h3>
                            <div className="post-meta">
                                <p className="post-tag">
                                    <a href="#">Politics</a>
                                </p>
                                <p className="post-date">{timeAgo(post.created_at)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="news">
                <h3 className="heading">career</h3>
                <div className="posts">
                    {posts.map(post => (
                        <div key={post.id} className="post">
                            <h3 className="post-title">
                                <a href={route('post.show', post.slug)}>
                                    {post.title}
                                </a>
                            </h3>
                            <div className="post-meta">
                                <p className="post-tag">
                                    <a href="#">Politics</a>
                                </p>
                                <p className="post-date">{timeAgo(post.created_at)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}
