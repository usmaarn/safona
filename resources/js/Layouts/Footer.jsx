import {ImLinkedin, ImYoutube, ImFacebook2, ImTwitter} from 'react-icons/im'
import {FiInstagram} from 'react-icons/fi'
import MenuSection from "../Components/Navbar/MenuSection";

export default function Footer(){
    return(
        <footer className="footer">
            <div className="wrapper">

                <MenuSection />

                <div className="middle">
                    <h2 className="site-logo">safona media</h2>
                    <div className="social-icons">
                        <a href="#"><ImLinkedin /></a>
                        <a href="#"><ImYoutube /></a>
                        <a href="#"><ImFacebook2 /></a>
                        <a href="#"><ImTwitter /></a>
                        <a href="#"><FiInstagram /></a>
                    </div>
                </div>

                <div className="bottom">
                    <p className="copyright">
                        <span>
                            &copy; {new Date().getFullYear()}
                            <a href="/">safona.media</a>
                        </span>
                        <span>All Rights Reserved.</span>
                    </p>

                    <ul>
                        <li><a href="#">about</a></li>
                        <li><a href="#">cookies</a></li>
                        <li><a href="#">terms</a></li>
                        <li><a href="#">privacy</a></li>
                        <li><a href="#">feedback</a></li>
                        <li><a href="#">advertise</a></li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}
