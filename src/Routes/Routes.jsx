import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
          path: "/profile",
          Component: Profile,
        },
        {
          path: "/login",
          Component: Login,
        },
        {
          path: "/signup",
          Component: Signup,
        },
    ],
  },
]);