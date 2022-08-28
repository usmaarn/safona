import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { AiFillCloseCircle } from 'react-icons/ai';


function Modal({ title, children, open, onClose }) {

    if (!open) return null;

    return (
        // <CSSTransition className="trans">
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-lg min-w-[250px] max-w-[600px]">
                <div className=" text-h3 p-5 border-b flex items-center justify-between">
                    <h3 className="font-semibold">{title}</h3>
                    <button onClick={onClose} className="text-zinc-600">
                        <AiFillCloseCircle className="" />
                    </button>
                </div>
                <div className="p-5">
                    {children}
                </div>
            </div>
        </div>
        // </CSSTransition>
    );
}

export default Modal;
