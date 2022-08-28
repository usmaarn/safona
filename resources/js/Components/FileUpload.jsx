import { useState, useRef } from "react";
import { InputError } from "./Form";

function FileUpload({ onChange, error, label }) {

    const [file, setFile] = useState(null);
    const fileRef = useRef();

    const handleClick = () => fileRef.current.click();

    const handleChange = (e) => {
        setFile(e.target.files[0]);
        e.target.files[0] && onChange(e.target.files[0]);
    }

    return (
        <div className="">
            <label>{label}</label>
            <div className={'file-upload ' + (error && 'error')} onClick={handleClick}>
                <input type='file' ref={fileRef} onChange={handleChange} />
                {file && file.type.startsWith('image/') ?
                    <img src={URL.createObjectURL(file)} alt={file.name} />
                    : <span>{file ? file.name : 'Click to Upload File'}</span>
                }
            </div>
            {error && <InputError error={error} />}
        </div>
    )

}

export default FileUpload;
