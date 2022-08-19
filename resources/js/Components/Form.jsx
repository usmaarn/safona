
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
