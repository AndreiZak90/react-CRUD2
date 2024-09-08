import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const put = async (form) => {
  await fetch(`http://localhost:7070/posts/${form.id}`, {
    method: "PUT",
    body: JSON.stringify(form),
  });
};

// eslint-disable-next-line react/prop-types
export default function ListPosts({ idx }) {
  const nav = useNavigate();
  const [user, setUser] = useState([]);
  const [value, setValue] = useState(user.content);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`http://localhost:7070/posts/${idx}`)
        .then((response) => response.json())
        .then((data) => setUser(data.post));
    };
    fetchData();
  }, [idx]);

  const handleSubmit = (e) => {
    e.preventDefault();

    put({
      id: idx,
      content: value,
    });
    location.reload();
    nav(-1);
  };

  return (
    <div className="changes_list">
      <div className="changes_item">
        <Link to={"/"} className="close_btn">
          X
        </Link>
        <p className="title_newPost">Редактировать пост</p>
        <form className="form_changes" onSubmit={handleSubmit}>
          <textarea
            className="changes_item_area"
            name="content"
            defaultValue={user.content}
            onChange={(e) => setValue(e.target.value)}
            required
          ></textarea>
          <input type="submit" value="Сохранить" className="classic_btn" />
        </form>
      </div>
    </div>
  );
}
