import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: "Home Page",
    },
    {
      path: "/add",
      element: "Add Page",
    },
    {
      path: "/update",
      element: "Update Page",
    },
  ]);
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
