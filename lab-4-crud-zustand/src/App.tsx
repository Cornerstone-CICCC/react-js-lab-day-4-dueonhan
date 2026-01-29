import { Routes, Route } from "react-router";
import PostHome from "./components/PostHome";
import PostAdd from "./components/PostAdd";
import PostList from "./components/PostList";
import PostDelete from "./components/PostDelete";
import PostEdit from "./components/PostEdit";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostHome />} />

        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/posts/new" element={<PostAdd />} />
        <Route path="/posts/:id/edit" element={<PostEdit />} />

        <Route path="/trash" element={<PostDelete />} />
      </Routes>
    </>
  );
}

export default App;
