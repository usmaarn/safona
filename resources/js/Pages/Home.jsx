import Layout from "@/Layouts/Index";
import LatestNews from "@/Components/Home/LatestNews";
import TopNews from "@/Components/Home/TopNews";
import Popular from "@/Components/Home/Popular";
import Videos from "@/Components/Home/Videos";
import MoreNews from "@/Components/Home/MoreNews";


export default function Home(props) {
    return (
        <Layout>
            <div className="main-wrapper">
                <div className="top">
                    <div className="">
                        <LatestNews posts={props.latest} />
                    </div>
                    <div className="">
                        <TopNews posts={props.top} />
                    </div>
                    <div className="">
                        <Popular posts={props.education} business={props.business} />
                    </div>
                </div>

                <Videos />

                <MoreNews posts={props.career} />
            </div>
        </Layout>
    )
}
