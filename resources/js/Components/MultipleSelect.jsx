import { useEffect, useRef, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { GrFormClose } from 'react-icons/gr';
import { InputError } from '@/Components/Form';

function MultipleSelect({ options, label, defaultValues, onChange, error }) {

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(defaultValues ?? []);
    const [filtered, setFiltered] = useState([]);
    const modalRef = useRef();

    useEffect(() => {
        setFiltered(options.filter(i => !selected.includes(i)))
    }, [selected])

    const watchRef = (ref = modalRef.current) => {
        if (!ref) return;
        let { bottom, height } = ref.getBoundingClientRect();
        if (window.innerHeight - bottom < height) {
            ref.classList.add('bottom-full');
            ref.classList.remove('top-full')
        };
    }

    open && watchRef()

    const add = (o) => {
        const nt = [...selected, o];
        setSelected(nt)
        onChange(nt.map(i => i.id));
    }

    const remove = (o) => {
        let nt = selected.filter(i => i.id !== o.id)
        setSelected(nt)
        onChange(nt.map(i => i.id))
    }

    return (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
            <div className="multiple-select">
                <label>{label}</label>
                <div className={"input-box "+(error && 'error')}>
                    {selected.map(el => (
                        <p key={el.id} className="item">
                            <span>{el.name}</span>
                            <GrFormClose className="cursor-pointer" onClick={() => remove(el)} />
                        </p>
                    ))}
                    <input type="text" placeholder={label} onFocus={() => setOpen(true)} />
                </div>
                {error && <InputError error={error} />}
                {open &&
                    <div className="options top-full" ref={modalRef}>
                        {filtered.map(el => (
                            <div onClick={() => add(el)} key={el.id} className="option">
                                {el.name}
                            </div>
                        ))}
                    </div>
                }
            </div>
        </ClickAwayListener>
    );
}

export default MultipleSelect;
