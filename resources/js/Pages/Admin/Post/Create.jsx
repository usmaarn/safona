import Dashboard from '@/Layouts/Dashboard'
import { useForm } from '@inertiajs/inertia-react';
import Editor from '@/Components/Editor';
import FileUpload from '@/Components/FileUpload';
import { CheckBox, Select, SubmitButton, TextArea } from '@/Components/Form';
import MultipleSelect from '@/Components/MultipleSelect';

function Create({ categories, tags }) {

    const { data, setData, post, errors } = useForm({
        title: '',
        content: '',
        publish: '',
        category_id: '',
        thumbnail: '',
        tags: [],
    })

    const hs = (e) => {
        e.preventDefault();
        post(route('post.store'))
    }

    return (
        <Dashboard title="Create Post">

            <form onSubmit={hs} className="form gap-5">

                <TextArea label='Post Title' name='title' error={errors.title}
                    onChange={(e) => setData('title', e.target.value)} />

                <FileUpload onChange={(img) => setData('thumbnail', img)}
                    error={errors.thumbnail} label="Post Thumbnail" />

                <Editor onChange={(c) => setData('content', c)}
                    error={errors.content} label="Post Content" />

                <Select name='category_id' value={data.category_id} options={categories}
                    onChange={(e) => setData('category_id', e.target.value)}
                    label="Post Category" error={errors.category_id} />

                <MultipleSelect onChange={(t) => setData('tags', t)} label="Post Tags"
                    options={tags} error={errors.tags} />

                <CheckBox label="Publish Post" name="publish" checked={data.publish}
                    onChange={(e) => setData('publish', !data.publish)} error={errors.publish} />

                <SubmitButton text={data.publish ? 'Publish' : 'Save'} />
            </form>
        </Dashboard>
    )
}

export default Create;
