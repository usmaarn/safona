import Dashboard from '@/Layouts/Dashboard';
import {Input} from '@/Components/Form';
import { useForm } from '@inertiajs/inertia-react';

function Create() {

    const {data, setData, errors, post} = useForm({
        name: '',
        slug: ''
    })

    const handleChange = e => setData(e.target.name, e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('tag.store'))
    }

    return (
        <Dashboard title="Create Tag">
            <div className="">
                 <form onSubmit={handleSubmit} className='form'>
                    <Input label="Name" name="name" onChange={handleChange} error={errors.name} />
                    <Input label="Slug" name="slug" onChange={handleChange} error={errors.slug} />
                    <button className='btn w-full'>Add</button>
                </form>
            </div>
        </Dashboard>
     );
}

export default Create;
