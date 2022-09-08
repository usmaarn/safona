import ClickAwayListener from "react-click-away-listener";
import { createPortal } from "react-dom";
import { IoIosCloseCircle } from "react-icons/io";

function Modal({ open, onClose, children, title }) {
    if (!open) return null;

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/30 flex items-center justify-center">
            <ClickAwayListener onClickAway={onClose}>
                <div className="min-w-[300px] bg-white rounded-lg">
                    <div className="px-5 py-3 border-b flex items-center justify-between text-zinc-500">
                        <h3 className="text-lg font-bold">
                            {title ?? "Modal Title"}
                        </h3>
                        <IoIosCloseCircle
                            className="text-xl cursor-pointer"
                            onClick={onClose}
                        />
                    </div>
                    <div className="p-5">{children}</div>
                </div>
            </ClickAwayListener>
        </div>
    );
}

createPortal(<Modal />, document.getElementById("modals"));

export default Modal;
