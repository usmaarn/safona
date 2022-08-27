import Comment from './Comment';
import { useForm, usePage } from '@inertiajs/inertia-react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Comments() {

    const { auth, post } = usePage().props;
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(route('comment.index', post.slug))
            .then(res => setComments(res.data))
            .catch(e => console.error(e.response.data))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!auth) return alert('please log in to bookmark this post');
        const comment = e.target.comment.value;
        axios.post(route('comment.store', post.slug), { comment })
            .then(res => {
                setComments(p => [res.data, ...p])
                e.target.comment.value = ''
            })
            .catch(e => setError(e.response.data.errors.comment))
    }

    return (
        <div className="comments-wrapper">

            <h2 className="text-h2 mb-5">Comments</h2>

            <form onSubmit={handleSubmit} className="p-3 border">
                <h3 className='text-h3'>Add new comment</h3>
                <textarea className='py-3 w-full focus:outline-none' name="comment"
                    placeholder='your comment' required />
                {error && <p className='text-red-500 text-p'>{error}</p>}
                <button disabled={!auth} className='disabled:cursor-not-allowed text-zinc-100 bg-zinc-800 px-3 py-1.5 rounded'>
                    Add Comment
                </button>
            </form>

            <div className="comments space-y-5 mt-5">
                {comments.length > 0 ?
                    comments.map(comment => (
                        <Comment comment={comment} key={comment.id} />
                    )) : <p className='text-h3 text-center'>No Comments Yet</p>
                }
            </div>
        </div>
    );
}

export default Comments;