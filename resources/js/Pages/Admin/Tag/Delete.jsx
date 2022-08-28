import Dashboard from '@/Layouts/Dashboard';
import { useForm } from '@inertiajs/inertia-react';

function Edit({ tag }) {

    const {delete:remove} = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        remove(route('tag.delete', tag.id))
    }

    return (
        <Dashboard title="Delete tag">
            <div className="">
                <h3>Are you sure you want to delete tag</h3>
                 <form onSubmit={handleSubmit} className='form'>
                    <h3>ID: {tag.id}</h3>
                    <h3>Name: {tag.name}</h3>
                    <h3>Slug: {tag.slug}</h3>
                    <button className='btn bg-red-500 w-full'>Delete</button>
                </form>
            </div>
        </Dashboard>
     );
}

export default Edit;
