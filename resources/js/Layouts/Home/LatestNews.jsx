import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)


export default function LatestNews(){

    const time = new TimeAgo('en-US');

    return(
        <section className="latest-news">
            <h2 className="heading">latest news</h2>
            <div className="posts">
                {[1,2,3,4].map(item => (
                    <div key={item} className="post">
                        <a href="#" className="post-thumbnail">
                            <img src="/news.jpg" alt="News Image" className="w-full"/>
                        </a>
                        <h3 className="post-title">
                            <a href="#">
                                NBA mounts pressure to free Effiong from prison custody
                            </a>
                        </h3>
                        <div className="post-meta">
                            <p className="post-tag">
                                <a href="#">Politics</a>
                            </p>
                            <p className="post-date">
                                {time.format(Date.now() - 2 * 60 * 1000)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
