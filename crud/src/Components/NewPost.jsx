import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const post = async (form) => {
  await fetch("http://localhost:7070/posts", {
    method: "POST",
    body: JSON.stringify(form),
  });
};

export default function NewPost() {
  const nav = useNavigate();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    post({
      content: value,
    });
    nav(-1);
  };

  console.log(value);

  return (
    <>
      <div className="new_post">
        <Link to={"/"} className="close_btn">
          X
        </Link>
        <p className="title_newPost">Новый пост</p>
        <form onSubmit={handleSubmit}>
          <textarea
            rows={3}
            cols={8}
            className="textarea"
            name="content"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          ></textarea>
          <input type="submit" value="Сохранить" className="classic_btn" />
        </form>
      </div>
    </>
  );
}
