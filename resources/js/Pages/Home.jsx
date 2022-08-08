import Layout from "../Layouts/Index";
import LatestNews from "../Layouts/Home/LatestNews";
import TopNews from "../Layouts/Home/TopNews";
import Popular from "../Layouts/Home/Popular";
import Videos from "../Layouts/Home/Videos";
import MoreNews from "../Layouts/Home/MoreNews";


export default function Home(){
    return(
        <Layout>
            <div className="main-wrapper">
                <div className="top">
                    <div className="">
                        <LatestNews />
                    </div>
                    <div className="">
                        <TopNews />
                    </div>
                    <div className="">
                        <Popular />
                    </div>
                </div>

                <Videos />

                <MoreNews />
            </div>
        </Layout>
    )
}
