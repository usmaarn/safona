import PageLayout from '@/Layouts/PageLayout';
import Header from '@/Components/Show/Header';
import BottomSection from '@/Components/Show/BottomSection';
import Comments from '@/Components/Show/Comments';
import urls from '../../helpers/urls';

export default function Show({ post, postTags, author }) {

    return (
        <PageLayout morePosts>

            <Header post={post} author={author} />

            <h1 className="text-[1.8rem] sm:text-[2.5rem] font-black">
                {post.title}
            </h1>

            <div className="flex space-x-2">
                {postTags.map(tag => (
                    <a key={tag.id} href={route('tag.show', tag.slug)}
                        className="capitalize tracking-wider px-3 py-1 font-medium border rounded">
                        {tag.name}
                    </a>
                ))}
            </div>

            <div className="">
                <img src={urls.imageUrl(post.thumbnail)} alt="" className="w-full" />
            </div>

            <div className="space-y-3 text-[1.2rem] font-light leading-[2]"
                dangerouslySetInnerHTML={{ __html: post.content }} />

            <BottomSection post={post.slug} />

            <Comments />

        </PageLayout>
    )
}
