import { BsHeart, BsHeartFill, BsChatSquareText, BsChatSquareTextFill } from 'react-icons/bs';
import SocialLinks from "@/Components/Show/SocialLinks";

function BottomSection() {
    return (
        <div className="flex items-center justify-between border-b pb-10">
            <div className="flex items-center gap-10">
                <button className="flex items-center gap-1">
                    <BsHeart className="text-[1.5rem]" />
                    <span>33k</span>
                </button>
                <div className="flex items-center gap-1">
                    <BsChatSquareText className="text-[1.5rem]" />
                    <span>346</span>
                </div>
            </div>
            <SocialLinks />
        </div>
    );
}

export default BottomSection;