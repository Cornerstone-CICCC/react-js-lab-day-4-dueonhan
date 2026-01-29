import { usePostStore, type Post } from "../store/post.store";
import { Link } from "react-router";

type Props = {
  p: Post;
};

export const PostListItem = ({ p }: Props) => {
  const deletePost = usePostStore((s) => s.deletePost);

  const handleDelete = (id: string) => {
    const res = confirm("Are you sure to delete?");
    if (res) {
      deletePost(id);
      alert("Post deleted!");
    }
  };

  return (
    <li>
      <span>
        Title: <Link to={`/posts/${p.id}`}>{p.title}</Link>{" "}
      </span>

      {/*<span>Content: {p.content}</span> */}
      <button onClick={() => handleDelete(p.id)}>Delete</button>
    </li>
  );
};

//export default PostListItem;
