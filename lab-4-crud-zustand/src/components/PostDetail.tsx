import { useParams, useNavigate } from "react-router";
import { usePostStore } from "../store/post.store";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = usePostStore((s) => s.posts.find((p) => p.id === id));

  if (!post) return <div>Post not found!</div>;

  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.content}</p>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate(`/posts/${id}/edit`)}>Edit</button>
    </div>
  );
};

export default PostDetail;
