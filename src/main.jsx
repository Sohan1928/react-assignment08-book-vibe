import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import PagesToRead from "./components/PagesToRead/PagesToRead";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home></Home>
      </div>
    ),
  },
  {
    path: "/listed",
    element: (
      <div>
        <ListedBooks></ListedBooks>
      </div>
    ),
  },
  {
    path: "/read",
    element: (
      <div>
        <PagesToRead></PagesToRead>
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
