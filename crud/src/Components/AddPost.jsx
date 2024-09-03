import user from "../img/user.png";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const del = (id) => {
  fetch(`http://localhost:7070/posts/${id}`, {
    method: "DELETE",
  });
};

// eslint-disable-next-line react/prop-types
export default function AddPost() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7070/posts")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  console.log(users);

  if (users.length === 0) {
    return (
      <>
        <div className="addPost_box">
          <Link to="/posts/new" className="addPost_btn">
            <div className="addPost_btn_box">Добавить пост</div>
          </Link>
        </div>
        <p className="error_texxt">Список пуст...</p>
      </>
    );
  }
  return (
    <>
      <div className="addPost_box">
        <Link to="/posts/new" className="addPost_btn">
          <div className="addPost_btn_box">Добавить пост</div>
        </Link>
      </div>
      <div className="list_posts">
        {users.map((item, id) => {
          return (
            <div key={id} className="list_block">
              <div className="list_info_block">
                <img src={user} alt="" className="list_img" />
                <p className="list_text">{item.content}</p>
              </div>
              <div className="remove_box">
                <Link className="change_link">Изменить</Link>
                <Link onClick={del(item.id)} className="delete_link">
                  Удалить
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
