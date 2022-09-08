export function Input(props) {
    const { type, name, label, value, onChange, required, error } = props;
    return (
        <div className="input-box">
            <label htmlFor={name}>{label}</label>
            <input
                type={type ?? "text"}
                name={name}
                id={name}
                value={value}
                placeholder={label.toLowerCase()}
                className="w-full block px-5 py-3 border rounded-lg"
                onChange={onChange}
                required={required}
            />
            {error && <p className="text-sm text-red-600">{errors}</p>}
        </div>
    );
}
