
export default function MoreNews(){
    return(
        <section className="more-news">

            <div className="news">
                <h3 className="heading">career</h3>
                <div className="posts">
                    {[1,2,3,4,5,6].map(post => (
                        <div className="post">
                            <h3 className="post-title"><a href="#">
                                Kashim Shettima’s Blunt Views: ‘We have God on our lips and the devil in our hearts’
                            </a></h3>
                            <div className="post-meta">
                                <p className="post-tag"><a href="#">Politics</a></p>
                                <p className="post-date">2 hours ago</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="news">
                <h3 className="heading">career</h3>
                <div className="posts">
                    {[1,2,3,4,5,6].map(post => (
                        <div className="post">
                            <h3 className="post-title"><a href="#">
                                Kashim Shettima’s Blunt Views: ‘We have God on our lips and the devil in our hearts’
                            </a></h3>
                            <div className="post-meta">
                                <p className="post-tag"><a href="#">Politics</a></p>
                                <p className="post-date">2 hours ago</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="news">
                <h3 className="heading">career</h3>
                <div className="posts">
                    {[1,2,3,4,5,6].map(post => (
                        <div className="post">
                            <h3 className="post-title"><a href="#">
                                Kashim Shettima’s Blunt Views: ‘We have God on our lips and the devil in our hearts’
                            </a></h3>
                            <div className="post-meta">
                                <p className="post-tag"><a href="#">Politics</a></p>
                                <p className="post-date">2 hours ago</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
