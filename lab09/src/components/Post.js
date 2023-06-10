import { Link } from "react-router-dom";

const Post = ({ post }) => {
    return (
        <div>
            <Link to={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
            </Link>
            <article>
                <p>{post.body}</p>
            </article>
        </div>
    );
};

export default Post;