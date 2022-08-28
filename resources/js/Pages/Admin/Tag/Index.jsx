import Dashboard from '@/Layouts/Dashboard';

function Tag({ tags }) {

    return (
        <Dashboard title="Tag">

            <a href={route('tag.create')} className='btn float-right'>Add Tag</a>

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
                        {tags.map(t => (
                            <tr key={t.id}>
                                <td>{t.id}</td>
                                <td>{t.name}</td>
                                <td>{t.slug}</td>
                                <td className='flex items-center gap-5'>
                                    <a href={route('tag.edit', t.id)}
                                        className='text-blue-500'>edit</a>
                                    <a href={route('tag.remove', t.id)}
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

export default Tag;
