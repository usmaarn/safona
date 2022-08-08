

export default function Popular(){
    return(
        <aside className="popular-news-section">

            <div className="section-bottom">
                <h3 className="heading">education</h3>
                <div className="posts">
                    {[1, 2, 3, 4, 5].map(item => (
                        <div className="post">
                            <p className="post-tag"><a href="#">Politics</a></p>
                            <h3 className="post-title">
                                <a href="#">
                                    Kashim Shettima’s Blunt Views: ‘We have God on our lips and the devil in our hearts’
                                </a>
                            </h3>
                            <p className="post-date">23 hours ago</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="top-section">
                <h3 className="heading">Business</h3>
                <div className="posts top">
                    {[1, 2, 3].map(post => (
                        <div className="post" key={post}>
                            <div className="post-thumbnail">
                                <img src="/news.jpg" alt="news"/>
                            </div>
                            <div className="content">
                                <p className="post-tag"><a href="#">Politics</a></p>
                                <h3 className="post-title"><a href="#">
                                    NBA mounts pressure to free Effiong from prison custody
                                </a></h3>
                                <p className="post-date">12 hours ago</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </aside>
    )
}
