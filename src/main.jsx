import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Users from "./components/Users/Users.jsx";
import UserDetail from "./components/UserDetails/UserDetail.jsx";
import Comments from "./components/Comments/Comments.jsx";
import CommentDetail from "./components/CommentDetail/CommentDetail.jsx";
import Posts from "./components/Posts/Posts.jsx";
import PostDetail from "./components/PostDetail/PostDetail.jsx";
import axios from "axios";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/comments",
        element: <Comments></Comments>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/comments"),
      },
      {
        path: "/comment/:commentId",
        element: <CommentDetail></CommentDetail>,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/comments/${params.commentId}`
          ),
      },
      {
        path: "/user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetail></UserDetail>,
      },
      {
        path: "/post/:postId",
        element: <PostDetail></PostDetail>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      },
      {
        path: "/posts",
        loader: async () => {
          const res = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
          );

          return res.data;
        },
        element: <Posts></Posts>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App></App>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
