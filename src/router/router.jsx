import { createBrowserRouter } from "react-router-dom";
import Root from "../root";
import Home from "./../pages/Home/HomePage";
import Search from "./../pages/Search/SearchPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "/search", element: <Search /> },
    ],
  },
]);
