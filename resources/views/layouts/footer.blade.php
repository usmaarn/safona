
<footer class="footer">

    <div class="wrapper">
        <div class="space-y-20">
            <a href="/" class="logo flex md:block gap-5">
                <img src="logo.png" class="w-20 md:w-12" alt="" />
                <h3 class="md:text-3xl">
                    Safona Media
                </h3>
            </a>

            <div class="flex gap-5 text-2xl text-zinc-500 justify-center md:justify-start">
                <a href="#">
                    <i class="bi bi-facebook"></i>
                </a>
                <a href="#">
                    <i class="bi bi-twitter"></i>
                </a>
                <a href="#">
                    <i class="bi bi-instagram"></i>
                </a>
                <a href="#">
                    <i class="bi bi-youtube"></i>
                </a>
                <a href="#">
                    <i class="bi bi-linkedin"></i>
                </a>
                <a href="#">
                    <i class="bi bi-whatsapp"></i>
                </a>
            </div>
        </div>

        <div class="menu">
            <div class="">
                <li>Nav Menu</li>
                <a href="{{ route('post.cat', 'news') }}">News</a>
                <a href="{{ route('post.cat', 'politics') }}">Politics</a>
                <a href="{{ route('post.cat', 'sport') }}">Sports</a>
                <a href="{{ route('post.cat', 'entertainment') }}">Entertainment</a>
                <a href="{{ route('post.cat', 'education') }}">Education</a>
            </div>
            <div class="">
                <li>Find Work</li>
                <a href="#">For Technologies</a>
                <a href="#">Learning Commuity</a>
                <a href="#">Leadership Progam</a>
                <a href="#">Resources</a>
            </div>
            <div class="">
                <li>Safona Media</li>
                <a href="#">About Us</a>
                <a href="#">Events</a>
                <a href="#">Blog</a>
                <a href="#">Press Center</a>
                <a href="#">Careers</a>
            </div>
            <div class="">
                <li>Pages</li>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Feedback</a>
            </div>
        </div>
    </div>

    <p class="copy text-center col-span-4 text-lg text-zinc-500 mt-10">
        &copy; 2022 | All Rights Reserved
    </p>

</footer>
