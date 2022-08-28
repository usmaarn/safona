import date from '@/helpers/date'
import { PostLink, CatLink } from '@/Components/Links';

export default function Popular({ posts, business }) {
    return (
        <aside className="popular-news-section">

            <div className="section-bottom">
                <h3 className="heading">education</h3>
                <div className="posts">
                    {posts.map(post => (
                        <div key={post.id} className="post">
                            <CatLink text="Category" slug="slug" className="post-tag" />
                            <PostLink text={post.title} slug={post.slug} className="post-title" />
                            <p className="post-date">
                                {date.date_diff(post.created_at)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="top-section">
                <h3 className="heading">Business</h3>
                <div className="posts top">
                    {business.map(post => (
                        <div className="post" key={post.id}>
                            <div className="post-thumbnail">
                                <img src={post.thumbnail} alt={post.title} />
                            </div>
                            <div className="content">
                                <CatLink text="Category" slug="slug" className="post-tag" />
                                <PostLink text={post.title} slug={post.slug} className="post-title" />
                                <p className="post-date">{date.date_diff(post.created_at)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </aside>
    )
}
