import {BsPlus} from "react-icons/bs";
import {ImFacebook2, ImLinkedin, ImTwitter, ImYoutube} from "react-icons/im";
import {RiInstagramFill} from "react-icons/ri"

const tags = [
    "hello", "world", "politics", "economy", "campus gist", "ignorance", "job", "opportunities", "asuu",
    "kasu", "education"];

export default function Footer(){
    return (
        <div className="footer">
            <div className="wrapper">
                <div className="top-menu">
                    <h1 className="logo">Safona.Media</h1>
                    <div className="search_wrapper">
                        <input type="search" placeholder="Search Safona.." className="search"/>
                    </div>
                </div>

                <div className="footer_menu grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
                    <ul className="footer_menu_section">
                        <li className="heading">pages</li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Support Us</a></li>
                        <li><a href="#">Submit a Story</a></li>
                        <li><a href="#">Advertise</a></li>
                    </ul>
                    <ul className="footer_menu_section">
                        <li className="heading">browse</li>
                        <li><a href="#">world</a></li>
                        <li><a href="#">Campus gist</a></li>
                        <li><a href="#">politics</a></li>
                        <li><a href="#">education</a></li>
                        <li><a href="#">job & opportunities</a></li>
                        <li><a href="#">technology</a></li>
                        <li><a href="#">lifestyle</a></li>
                        <li><a href="#">business</a></li>
                    </ul>

                    <div className="footer_menu_section col-span-2">
                        <h1 className="heading">Popular Tags</h1>
                        <div className="tags mt-3">
                            <ul className="flex gap-3 flex-wrap">
                                {tags.map(tag => <li key={tag}>
                                    <a href="#" className="">
                                        {tag}
                                    </a>
                                </li>)}
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

            <div className="section_two">
                <div className="wrapper">
                    <div className="col-span-3">
                        <h3 className="heading">Information you can trust</h3>
                        <p className="text-sm">
                            Reuters, the news and media division of Thomson Reuters, is the world’s
                            largest multimedia news provider,
                            reaching billions of people worldwide every day. Reuters provides business, financial,
                            national and international news to professionals via desktop terminals,
                            the world's media organizations, industry events and directly to consumers.
                        </p>
                    </div>
                    <div className="col-span-2">
                        <h3 className="heading">follow us</h3>
                        <ul className="social_links">
                            <li><a href="#" className="link"><ImFacebook2 /></a></li>
                            <li><a href="#"><ImTwitter /></a></li>
                            <li><a href="#"><RiInstagramFill /></a></li>
                            <li><a href="#"><ImLinkedin /></a></li>
                            <li><a href="#"><ImYoutube /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <p className="copyright">
                Copyright ©2022
                <a href="/">Safona.Media</a>
                . All rights reserved. —
                <a href="#">Privacy Policy</a>
            </p>

        </div>
    )
}
