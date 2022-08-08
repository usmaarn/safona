

export default function TopNews(){
    return(
        <section className="top-news">

            <h3 className="heading">Top News</h3>

            <div className="posts">
                {[1,2,3,4,5].map(item => (
                    <div key={item} className="post">
                        <a href="#" className="post-thumbnail">
                            <img src="/news.jpg" alt="top news"/>
                        </a>
                        <h3 className="post-title">
                            <a href="#">
                                Kashim Shettima’s Blunt Views: ‘We have God on our lips and the devil in our hearts’
                            </a>
                        </h3>
                        <div className="post-meta">
                            <p className="post-tag"><a href="#">Politics</a></p>
                            <p className="post-date">2 hours ago</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}
