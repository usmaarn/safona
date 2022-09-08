import { ImFacebook2, ImTwitter, ImWhatsapp } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { createRoot } from "react-dom/client";

const elements = document.querySelectorAll(".share-menu");

elements.forEach((element) => {
    const slug = element.getAttribute("data-post-slug");

    function ShareMenu() {
        return (
            <div className="text-3xl space-x-5 text-zinc-500 flex items-center gap-3">
                <a href="#">
                    <i className="bi bi-facebook"></i>
                </a>
                <a href={"https://wa.me/?text=" + route("post.show", slug)}>
                    <ImWhatsapp />
                </a>

                <a
                    href={
                        "https://twitter.com/share?url=" +
                        route("post.show", slug)
                    }
                >
                    <ImTwitter />
                </a>

                <a href="#">
                    <i className="bi bi-linkedin"></i>
                </a>
                <button>
                    <i className="bi bi-box-arrow-up-right"></i>
                </button>
            </div>
        );
    }

    const root = createRoot(element);
    root.render(<ShareMenu />);
});
