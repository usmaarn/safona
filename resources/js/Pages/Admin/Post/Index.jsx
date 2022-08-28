import Dashboard from '@/Layouts/Dashboard';


export default function Index({ posts }) {
  return (
    <Dashboard title="Posts">
        <div className="">

            <a href={route('post.create')} className='btn float-right'>New Post</a>

            <div className="pt-5">
                <h2 className='my-3 text-h3 font-bold'>All Posts</h2>

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            {/* <th>Category</th> */}
                            {/* <th>Author</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {posts.map(post => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td clas>
                                    <a href={route('post.show', post.slug)}>
                                        {post.title}
                                    </a>
                                </td>
                                {/* <td>{post.category.name}</td> */}
                                <td className='flex items-center gap-5'>
                                    <a href={route('post.edit', post.id)}
                                        className='text-blue-500'>edit</a>
                                    <a href={route('post.remove', post.id)}
                                        className='text-danger'>delete</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    </Dashboard>
  )
}

