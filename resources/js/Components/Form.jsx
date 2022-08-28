import { useRef } from "react";
import { useState } from "react";

export const InputError = ({ error }) => {
    return <p className="text-red-500 text-p font-semibold">{error}</p>
}

export function Input(props) {
    const className = `form-input ${props.error ? 'error' : ''}`;
    return (
        <div className="input-box">
            <label>{props.label}</label>
            <input type={props.type ?? 'text'} spellCheck="true" value={props.value}
                className={className} onChange={props.onChange} placeholder={props.label} {...props} />
            {props.error && <InputError error={props.error} />}
        </div>
    )
}


export function TextArea(props) {
    return (
        <div className="input-box">
            <label>{props.label}</label>
            <textarea spellCheck="true" value={props.value} {...props}
                className={`form-input ${props.error ? 'error' : ''}`}
                onChange={props.onChange} placeholder={props.label} />
            {props.error && <InputError error={props.error} />}
        </div>
    )
}


export function Select(props) {
    return (
        <div className="input-box">
            <label>{props.label}</label>
            <select name="" onChange={props.onChange} value={props.value}
                className={"form-input " + (props.error && 'error')}>
                <option>{props.label}</option>
                {props.options && props.options.map((option, index) => (
                    <option key={option.id} className="capitalize" value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
            {props.error && <InputError error={props.error} />}
        </div >
    )
}

export const CheckBox = ({ error, label, checked, onChange, name }) => (
    <div className="check-box">
        <label>
            <input type="checkbox" checked={checked} onChange={onChange} name={name} />
            <p className={error && "text-red-500"}>{label}</p>
        </label>
        {error && <InputError error={error} />}
    </div>
)


export const SubmitButton = ({ text }) => (
    <button className="submit-btn">
        {text}
    </button>
)
