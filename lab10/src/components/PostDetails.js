const PostDetails = ({ post }) => {
    const { title, body, username, email } = post;

    return (
        <article>
            <h2>{title}</h2>
            <h4>{username}</h4>
            <h4>{email}</h4>
            <p>{body}</p>
        </article>
    );
};

export default PostDetails;