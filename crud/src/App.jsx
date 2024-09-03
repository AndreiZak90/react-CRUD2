import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AddPost from "./Components/AddPost";
import NewPost from "./Components/NewPost";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path={"/"} element={<AddPost />} />
        <Route path={"/posts/new"} element={<NewPost />} />
      </>
    )
  );
  return (
    <>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
