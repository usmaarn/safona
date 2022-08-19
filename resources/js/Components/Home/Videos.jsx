import { FaPlay } from 'react-icons/fa'


export default function Videos() {
    return (
        <section className="videos">
            <h3 className="heading">Top Videos</h3>

            <div className="wrapper">

                <div className="left">
                    <video controls>
                        <source src="video.mp4" type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                    <h2 className="post-title text-h3"><a href="#">
                        Kashim Shettima’s Blunt Views: ‘We have God on our lips and the devil in our hearts’
                    </a></h2>
                </div>

                <div className="right">
                    {[1, 2].map(video => (
                        <div className="" key={video}>
                            <a href="#" className="post-thumbnail relative w-full">
                                <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-h1 z-10"><FaPlay /></span>
                                <img src="/news.jpg" alt="video" />
                            </a>
                            <h3 className="post-title">
                                <a href="#">Kashim Shettima’s Blunt Views: ‘We have God on our lips and the devil in our hearts’</a>
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
