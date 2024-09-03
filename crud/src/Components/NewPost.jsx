import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const post = (form) => {
  fetch("http://localhost:7070/posts", {
    method: "POST",
    body: JSON.stringify(form),
  });
};

// eslint-disable-next-line react/prop-types
export default function NewPost() {
  const nav = useNavigate();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    nav("/");
    post({
      id: Math.random(),
      content: value,
    });
  };

  console.log(value);

  return (
    <>
      <div className="new_post">
        <Link to={"/"} className="close_btn">
          X
        </Link>
        <p className="title_newPost">Новый пост</p>
        <form>
          <textarea
            rows={3}
            cols={8}
            className="textarea"
            name="content"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          ></textarea>
          <button type="submit" onClick={handleSubmit} className="classic_btn">
            Сохранить
          </button>
        </form>
      </div>
    </>
  );
}
