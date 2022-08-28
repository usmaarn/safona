import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { useEffect } from "react";
import { useState } from "react";
import { InputError } from '@/Components/Form';


function Editor({ data, onChange, error, label }) {

    const [content, setContent] = useState(null);

    const { quill, quillRef } = useQuill({
        placeholder: ['Compose an epic...'],
        modules: {
            toolbar: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ align: [] }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ indent: '-1' }, { indent: '+1' }],
                ['link', 'image'],
                [{ color: [] }, { background: [] }],
                ['clean'],
            ],
            clipboard: { matchVisual: false },
        },
        formats: [
            'header',
            'bold', 'italic', 'underline', 'strike',
            'align', 'list', 'indent',
            'link', 'image',
            'color', 'background',
            'clean',
        ],
    });

    useEffect(() => {
        if (quill) {
            quill.clipboard.dangerouslyPasteHTML(data ?? '');
            quill.on('text-change', (delta, oldDelta, source) => {
                setContent(quill.getText());
                onChange(quill.root.innerHTML);
            });
        }
    }, [quill])

    const c = content && content.replaceAll('\n', ' ')
    const l = c && c.trim().split(' ').length;

    return (
        <div className={"h-[80vh] flex flex-col " + (error && 'border border-red-500')}>
            <label>{label}</label>
            <div className="flex-1 overflow-y-auto " ref={quillRef} />
            <div className="py-1 px-5 border-x border-b border-zinc-300 text-sm">
                <p>{content ? l : 0}/10000</p>
            </div>
            {error && <InputError error={error} />}
        </div >
    );
}

export default Editor;
