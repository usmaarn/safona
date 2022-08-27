import MorePosts from "@/Components/MorePosts";
import Layout from '@/Layouts/Index';
import Sidebar from '@/Components/Sidebar';



export default function PageLayout({ title, children, morePosts }) {
    return (
        <Layout>

            <div className="p-5 max-w-[1080px] mx-auto">

                <div className="wrapper grid lg:grid-cols-[auto_350px] gap-10 md:gap-20 my-10">

                    <div className="space-y-10">

                        <h1 className="text-h2" dangerouslySetInnerHTML={{ __html: title }} />

                        {children}

                    </div>

                    <Sidebar />

                </div>

                <MorePosts posts={morePosts} />

            </div>

        </Layout>
    )
}
