import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <NotFound />,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
    ],
  },
]);
