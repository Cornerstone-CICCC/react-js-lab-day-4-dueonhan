import React from "react";

import { usePostStore, type Post } from "../store/post.store";
import { Link } from "react-router";
import { PostListItem } from "./PostListItem";
import { useShallow } from "zustand/react/shallow";

type Props = {
  p: Post;
};

const PostDelete = ({ p }: Props) => {
  const posts = usePostStore(
    useShallow((s) => s.posts.filter((p) => p.isDeleted)),
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
    </div>
  );
};

export default PostDelete;
