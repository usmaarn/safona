import { useState } from "react"
import ClickAwayListener from "react-click-away-listener"

export const Input = ({ type, error, label, onChange, value, name }) => (
    <div className="input-box">
        <input type={type ?? "text"} placeholder={label} value={value}
            onChange={onChange} className={error && 'invalid-input'} name={name} />
        {error && <p className='error-text'>{error}</p>}
    </div>
)

export const Textarea = ({ error, label, onChange, value, name }) => (
    <div className="textarea-box">
        <textarea type="text" placeholder={label} value={value} onChange={onChange}
            className={error && 'invalid-input'} name={name} />
        {error && <p className='error-text'>{error}</p>}
    </div>
)

export const CheckBox = ({ error, label, checked, onChange, name }) => (
    <div className="check-box">
        <label>
            <input type="checkbox" checked={checked} onChange={onChange} name={name} />
            <p className={error && "text-red-500"}>{label}</p>
        </label>
        {error && <p className="error-text">{error}</p>}
    </div>
)


export const SubmitButton = ({ text }) => (
    <button className="submit-btn">
        {text}
    </button>
)


export const Select = ({ options, multiple }) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(multiple ? [] : null);
    const hc = (o) => {
        console.log(selected);
        setSelected(p => {
            let e = p.find(i => i.id == o.id)
            return multiple ? (e ? p.filter(i => i.id !== o.id) : [...p, o]) : o
        });
        !multiple && setOpen(false);
    }

    return (
        <div className="relative">
            {/* <label>Category</label> */}
            <button type="button" className="w-full px-5 py-3 border text-left"
                onClick={() => setOpen(true)}>
                {selected ? 
                    (multiple ? selected.map(i=>i.name).join() : selected.name)
                 : 'Category'}
            </button>
            {open &&
                <ClickAwayListener onClickAway={() => setOpen(false)}>
                    <div className="absolute bottom-0 w-full bg-white flex flex-col shadow">
                        {options.map(o => (
                            multiple ?
                                <button type="button" key={o.id} onClick={() => hc(o)}
                                    className="flex items-center gap-1 py-1 px-3">
                                    <input type='checkbox'
                                        checked={!!selected.find(s => s.id == o.id)} />
                                    {o.name}
                                </button> :
                                <button type="button" key={o.id} onClick={() => hc(o)}
                                    className="flex items-center gap-1 py-1 px-3">
                                    <input type={multiple ? 'checkbox' : "radio"}
                                        checked={selected?.id === o.id} onChange={null} />
                                    {o.name}
                                </button>
                        ))}
                    </div>
                </ClickAwayListener>
            }
        </div>
    )
}