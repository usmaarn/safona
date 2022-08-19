import { useEffect, useState } from 'react';
import { Editor as MyEditor } from 'react-draft-wysiwyg';
import { convertToRaw, ContentState, EditorState } from 'draft-js'
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import PreviousMap from 'postcss/lib/previous-map';


const toolbars = {
    options: [
        'inline', 'blockType', 'list', 'link', 'embedded', 'emoji', 'image', 'history'
    ],
    list: {
        options: ['unordered', 'ordered', 'indent', 'outdent'],
    },
    image: {
        alignmentEnabled: true,
        uploadCallback: () => {
            return { data: { link: 'https://via.placeholder.com/640x480.png/003311?text=nemo' } }
        },
        previewImage: true,
        inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
        alt: { present: true, mandatory: false },
        defaultSize: {
            height: 'auto',
            width: 'auto',
        },
    },
}


export default function Editor({ onChange, data }) {

    const [state, setState] = useState('');

    useEffect(() => {
        const contentBlock = htmlToDraft(data ?? '<p>Hello World</p>');
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        const editorState = EditorState.createWithContent(contentState);
        setState(editorState)
    }, [])

    const handleChange = (data) => {
        setState(data)
        data = draftToHtml(convertToRaw(data.getCurrentContent()));
        onChange(data)
    }

    return (
        <MyEditor
            toolbar={toolbars}
            editorState={state ?? ''}
            toolbarClassName="bg-gray-500 text-p"
            wrapperClassName="bg-white p-2 shadow"
            editorClassName="border rounded px-3 font-serif"
            onEditorStateChange={handleChange}
        />
    )
}
