import date from '@/helpers/date';
import { PostLink, CatLink } from "@/Components/Links";
import urls from '@/helpers/urls';

export default function LatestNews({ posts }) {

    return (
        <section className="latest-news">
            <h2 className="heading">latest news</h2>
            <div className="posts">
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <a href={route('post.show', post.slug)} className="post-thumbnail">
                            <img src={urls.thumbnailUrl(post.thumbnail)}
                                alt={post.title} className="w-full" />
                        </a>
                        <PostLink text={post.title} slug={post.slug} className='post-title' />
                        <div className="post-meta flex items-center gap-3">
                            <CatLink text="Category" slug='cat' className="post-tag" />
                            <p className="post-date">
                                {date.date_diff(post.created_at)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
