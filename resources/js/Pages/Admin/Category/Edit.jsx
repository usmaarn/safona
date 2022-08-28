import Dashboard from '@/Layouts/Dashboard';
import {Input} from '@/Components/Form';
import { useForm } from '@inertiajs/inertia-react';

function Edit({ category }) {

    const {data, setData, errors, put} = useForm({
        name: category.name,
        slug: category.slug
    })

    const handleChange = e => setData(e.target.name, e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('cat.update', category.id))
    }

    return (
        <Dashboard title="Edit Category">
            <div className="">
                 <form onSubmit={handleSubmit} className='form'>
                    <Input label="Name" name="name" value={data.name}
                        onChange={handleChange} error={errors.name} />
                    <Input label="Slug" name="slug" value={data.slug}
                        onChange={handleChange} error={errors.slug} />
                    <button className='btn w-full'>Update</button>
                </form>
            </div>
        </Dashboard>
     );
}

export default Edit;
