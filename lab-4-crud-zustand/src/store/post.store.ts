import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { persist } from "zustand/middleware";

export interface Post {
  id: string;
  title: string;
  content: string;
  isDeleted: boolean;
}

type State = {
  posts: Post[];
};

type Action = {
  addPost: (title: string, content: string) => void;
  listPost: () => void;
  editPost: (id: string, title: string, content: string) => void;
  deletePost: (id: string) => void;
};

export const usePostStore = create<State & Action>()(
  persist(
    (set) => ({
      posts: [],

      addPost: (title, content) =>
        set((state) => ({
          posts: [
            ...state.posts,
            { id: uuidv4(), title, content, isDeleted: false },
          ],
        })),
      listPost: () => {},
      deletePost: (id: string) =>
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === id ? { ...post, isDeleted: true } : post,
          ),
        })),
      editPost: (id, title, content) =>
        set((state) => ({
          posts: state.posts.map((post) =>
            post.id === id ? { ...post, title, content } : post,
          ),
        })),
    }),
    {
      name: "post-storage", // localStorage key
      //storage: localStorage
    },
  ),
);
