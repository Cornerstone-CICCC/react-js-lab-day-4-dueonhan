import React from "react";
import { usePostStore } from "../store/post.store";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { FormEvent } from "react";

const PostEdit = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const post = usePostStore((s) => s.posts.find((p) => p.id === id));
  const editPost = usePostStore((s) => s.editPost);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const handleEditPost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;

    editPost(id, title, content);
    alert("Post edited successfully!");

    navigate(`/posts/${id}`);
  };

  return (
    <div>
      <h2>Edit Post</h2>

      <form onSubmit={handleEditPost}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title..."
        />
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content..."
        />

        <button type="submit">Update Post</button>
        <button type="button" onClick={() => navigate(-1)}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default PostEdit;
