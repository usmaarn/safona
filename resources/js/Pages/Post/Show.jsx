import PageLayout from '@/Layouts/PageLayout';
import Header from '@/Components/Show/Header';
import BottomSection from '@/Components/Show/BottomSection';
import Comments from '@/Components/Show/Comments';

export default function Show({ post }) {
    return (
        <PageLayout morePosts>

            <Header />

            <h1 className="text-[1.8rem] sm:text-[2.5rem] font-black">
                {post.title}
            </h1>

            <div className="flex space-x-2">
                {['politics', 'election', 'news', 'gist'].map(tag => (
                    <a href="#" className="capitalize tracking-wider px-3 py-1 font-medium border rounded" key={tag}>{tag}</a>
                ))}
            </div>

            <div className="bg-zinc-300">
                <img src={post.thumbnail} alt="" className="w-full" />
            </div>

            <div className="space-y-3 text-[1.2rem] font-light leading-[2]">
                {post.content}
            </div>

            <BottomSection />

            <Comments />

        </PageLayout>
    )
}