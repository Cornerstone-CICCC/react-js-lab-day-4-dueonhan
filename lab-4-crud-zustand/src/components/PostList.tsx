import { Link } from "react-router";
import React from "react";
import { usePostStore } from "../store/post.store";
import { PostListItem } from "./PostListItem";
import { useShallow } from "zustand/react/shallow";

const PostList = () => {
  const posts = usePostStore(
    useShallow((s) => s.posts.filter((p) => !p.isDeleted)),
  );

  return (
    <div>
      <h2>Posts List</h2>
      {posts.map((p) => (
        <PostListItem key={p.id} p={p} />
      ))}
      <Link to="/posts/new">
        <button>Add Post</button>
      </Link>
      <Link to="/trash">
        <button>Delete Post History</button>
      </Link>
    </div>
  );
};

export default PostList;
