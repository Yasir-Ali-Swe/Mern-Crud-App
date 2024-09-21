import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import User from "./Components/Users/User";
import AddUser from "./Components/AddUser/AddUser";
import UpdateUser from "./Components/UpdateUser/UpdateUser";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <AddUser />,
    },
    {
      path: "/update/:id",
      element: <UpdateUser />,
    },
  ]);
  return <RouterProvider router={route}></RouterProvider>;
};

export default App;
