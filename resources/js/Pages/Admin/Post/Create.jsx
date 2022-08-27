import Dashboard from '@/Layouts/Dashboard'
import { useForm } from '@inertiajs/inertia-react';
import Editor from '../../../Components/Editor';
import { Select } from '../../../Components/Form';

function Create({ categories, tags }) {

    const { data, setData } = useForm({
        title: '',
        content: '',
        publish: '',
        category_id: '',
        thumbnail: '',
        tags: [],
    })

    const hc = (e) => {
        // setData(e.target.name, e.target.value);
        console.log(e.target.value);
    }

    const hs = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <Dashboard title="Create Post">
            <form onSubmit={hs} className="flex flex-col gap-2 p-5 shadow bg-white">
                <textarea placeholder='Title' name='title' onChange={hc}
                    className='px-5 py-3 text-h2 font-bold resize-none border' />

                <input type="file" />

                <Editor onChange={(c) => setData('content', c)} />
                <select name='category_id' onChange={hc} className='px-5 py-3 border'>
                    <option>Category</option>
                    {categories.map(c => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                </select>
                <Select options={tags} multiple />
                <label className='flex items-center gap-2'>
                    <input type="checkbox" checked={data.publish}
                        onChange={(e) => setData('publish', !data.publish)} />
                    <span>Publish Post</span>
                </label>
                <button className='py-3 bg-green-400 text-white'>
                    {data.publish ? 'Publish' : 'Save'}
                </button>
            </form>
        </Dashboard>
    );
}

export default Create;