import Layout from "@/components/Layout";
import CampusGist from "../components/Home/CampusGist";
import Slider from "../components/Home/Slider";
import Politics from "../components/Home/Politics";
import Trending from "../components/Home/Trending";
import TopVideos from "../components/Home/TopVideos";
import MoreNews from "../components/Home/MoreNews";

export default function Home(){
    return(
        <Layout>
            <div className="mt-10">

                <div className="max-w-[940px] mx-auto">
                    <h3 className="uppercase mb-2 text-sky-500 font-bold">
                        Latest Stories
                    </h3>
                    <Slider />

                    <div className="grid grid-cols-3 gap-5 mt-10">
                        <div className="col-span-2">
                            <Trending />
                        </div>
                        <div className="">
                            <Politics />
                        </div>
                    </div>

                    <CampusGist />

                </div>

                <TopVideos />

                <div className="max-w-[940px] mx-auto">
                    <MoreNews />
                </div>

            </div>
        </Layout>
    )
}
