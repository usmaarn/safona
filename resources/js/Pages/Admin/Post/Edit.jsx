import Dashboard from '@/Layouts/Dashboard'
import { useForm } from '@inertiajs/inertia-react';
import Editor from '@/Components/Editor';
import { CheckBox, Select, SubmitButton, TextArea } from '@/Components/Form';
import MultipleSelect from '@/Components/MultipleSelect';
import urls from '@/helpers/urls';

function Edit({ categories, tags , post}) {

    const { data, setData, put, errors } = useForm({
        title: post.title,
        content: post.content,
        publish: post.published,
        category_id: post.category_id,
        tags: post.tags.map(tag => tag.id),
    })

    const hs = (e) => {
        e.preventDefault();
        put(route('post.update', post.id))
    }

    return (
        <Dashboard title="Edit Post">

            <form onSubmit={hs} className="form gap-5">

                <img src={urls.imageUrl(post.thumbnail)} alt={post.title} />

                <TextArea label='Post Title' name='title' error={errors.title}
                    onChange={(e) => setData('title', e.target.value)} value={data.title} />

                <Editor onChange={(c) => setData('content', c)} data={post.content}
                    error={errors.content} label="Post Content" />

                <Select name='category_id' value={data.category_id} options={categories}
                    onChange={(e) => setData('category_id', e.target.value)}
                    label="Post Category" error={errors.category_id} />

                <MultipleSelect onChange={(t) => setData('tags', t)} label="Post Tags"
                    options={tags} error={errors.tags} defaultValues={post.tags} />

                <CheckBox label="Publish Post" name="publish" checked={data.publish}
                    onChange={(e) => setData('publish', !data.publish)} error={errors.publish} />

                <SubmitButton text={data.publish ? 'Publish' : 'Save'} />
            </form>
        </Dashboard>
    )
}

export default Edit;
