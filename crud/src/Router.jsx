import { createBrowserRouter } from "react-router-dom";

import AddPost from "./Components/AddPost";
import NewPost from "./Components/NewPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AddPost />,
    children: [
      {
        path: "posts/new",
        element: <NewPost />,
      },
    ],
  },
]);
export { router };
