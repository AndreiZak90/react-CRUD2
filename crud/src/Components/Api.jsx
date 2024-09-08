import { redirect } from "react-router-dom";

export const post = (form) => {
  fetch("http://localhost:7070/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  return redirect("/");
};

export const del = (id) => {
  fetch(`http://localhost:7070/posts/${id}`, {
    method: "DELETE",
  });
};

export const get = () => {
  let resp;
  fetch("http://localhost:7070/posts")
    .then((res) => res.json())
    .then((data) => (resp = data))
    .catch((err) => console.error(err));
  return resp;
};
