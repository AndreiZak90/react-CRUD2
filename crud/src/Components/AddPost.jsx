import user from "../img/user.png";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function AddPost({ idx }) {
  const [users, setUsers] = useState([]);

  const upId = async (id) => {
    await idx(id);
    console.log(id);
  };

  const del = (id) => {
    console.log(id);
    fetch(`http://localhost:7070/posts/${id}`, {
      method: "DELETE",
    });
    location.reload();
  };

  useEffect(() => {
    fetch("http://localhost:7070/posts", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  console.log(users);

  if (users.length === 0) {
    return (
      <>
        <p className="error_texxt">Список пуст...</p>
      </>
    );
  }
  return (
    <>
      <div className="list_posts">
        {users.map((item, id) => {
          return (
            <div key={id} className="list_block">
              <div className="list_info_block">
                <img src={user} className="list_img" />
                <p className="list_text">{item.content}</p>
              </div>
              <div className="remove_box">
                <Link
                  to="/posts/changes"
                  onClick={() => upId(item.id)}
                  className="change_link"
                >
                  Изменить
                </Link>
                <Link
                  to="/"
                  onClick={() => del(item.id)}
                  className="delete_link"
                >
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
