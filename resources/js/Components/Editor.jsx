import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { useEffect } from "react";
import { useState } from "react";


function Editor({ data, onChange }) {

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
        <div className="mb-4 w-full bg-gray-50 dark:bg-gray-700">
            <div className="h-96">
                <div className="" ref={quillRef} />
            </div>
            <div className="py-1 px-5 border-x border-b border-zinc-300 text-sm">
                <p>{content ? l : 0}/10000</p>
            </div>
        </div>
    );
}

export default Editor;