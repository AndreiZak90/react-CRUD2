import "./App.css";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import AddPost from "./Components/AddPost";
import NewPost from "./Components/NewPost";
import ListPosts from "./Components/ListPosts";

function App() {
  const [userId, setUserId] = useState("");

  const newId = async (id) => {
    await setUserId(id);
    console.log(userId);
  };
  return (
    <>
      <div className="container">
        <div className="addPost_box">
          <Link to="/posts/new" className="addPost_btn">
            <div className="addPost_btn_box">Добавить пост</div>
          </Link>
        </div>
        <Routes>
          <Route path="/posts/new" element={<NewPost />} />
          <Route path="/posts/changes" element={<ListPosts idx={userId} />} />
          <Route path="*" element={<AddPost idx={newId} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
