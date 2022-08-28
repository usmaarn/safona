import Dashboard from '@/Layouts/Dashboard';

function Category({ categories }) {

    return (
        <Dashboard title="Category">

            <a href={route('cat.create')} className='btn float-right'>Add Category</a>

            <div className="pt-5">
                <h2 className='my-3 text-h3 font-bold'>All Categories</h2>

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Slug</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {categories.map(c => (
                            <tr key={c.id}>
                                <td>{c.id}</td>
                                <td>{c.name}</td>
                                <td>{c.slug}</td>
                                <td className='flex items-center gap-5'>
                                    <a href={route('cat.edit', c.id)}
                                        className='text-blue-500'>edit</a>
                                    <a href={route('cat.remove', c.id)}
                                        className='text-danger'>delete</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </Dashboard>
    );
}

export default Category;
