import React, { useEffect, useState, type FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { usePostStore } from "../store/post.store";
import { useNavigate } from "react-router";

const PostAdd = () => {
  //const posts = usePostStore((s) => s.posts);
  const addPosts = usePostStore((s) => s.addPost);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {});

  const handleAddPost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;

    addPosts(title, content);
    alert("Post added successfully!");

    navigate("/");
  };

  return (
    <div>
      <h2>post form</h2>

      <form onSubmit={handleAddPost}>
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

        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default PostAdd;
