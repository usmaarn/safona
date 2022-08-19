import Comment from './Comment';

function Comments() {
    return (
        <div className="comments-wrapper">
            <h2 className="text-h2 mb-5">Comments</h2>
            <div className="comments space-y-5">
                {[1, 2, 3, 4].map(comment => (
                    <Comment comment={comment} key={comment} />
                ))}
            </div>
        </div>
    );
}

export default Comments;