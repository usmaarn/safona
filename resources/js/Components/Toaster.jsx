import { MdOutlineError } from 'react-icons/md';
import { BiErrorAlt, BiCheckCircle, BiError, BiInfoCircle } from 'react-icons/bi';
import { TiInfo } from 'react-icons/ti';
import { TbCircleCheck, TbInfoSquare } from 'react-icons/tb';
import { useEffect, useRef } from 'react';

function Toaster({ type, show, onClose, message }) {

    const toast = useRef();

    if (!show) return null;

    setTimeout(onClose, 5000);

    const Icon = () => {
        switch (type) {
            case "success":
                return <TbCircleCheck />
            case "error":
                return <BiErrorAlt />
            case "warning":
                return <BiError />
            case "info":
                return <TiInfo />
            default:
                return <TbInfoSquare />;
        }
    }

    return (
        <div className={"toast " + type} ref={toast}>
            <div className="flex items-center gap-2">
                <span className='text-h2'><Icon /></span>
                <h3 className='font-medium text-sm'>
                    {message ?? "Demo Message From Taoster"}
                </h3>
            </div>
        </div>
    );
}



export default Toaster;
