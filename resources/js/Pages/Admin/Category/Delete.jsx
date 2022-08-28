import Dashboard from '@/Layouts/Dashboard';
import { useForm } from '@inertiajs/inertia-react';

function Edit({ category }) {

    const {delete:remove} = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        remove(route('cat.delete', category.id))
    }

    return (
        <Dashboard title="Delete Category">
            <div className="">
                <h3>Are you sure you want to delete category</h3>
                 <form onSubmit={handleSubmit} className='form'>
                    <h3>ID: {category.id}</h3>
                    <h3>Name: {category.name}</h3>
                    <h3>Slug: {category.slug}</h3>
                    <button className='btn bg-red-500 w-full'>Delete</button>
                </form>
            </div>
        </Dashboard>
     );
}

export default Edit;
