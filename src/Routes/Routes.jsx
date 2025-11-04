import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SkillDetails from "../pages/SkillDetails";
import PrivateRoutes from "./PrivateRoutes";
import Forget from "../pages/Forget";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement: <h2>404Error</h2>,
    children: [
      {
        index: true,
        loader: () => fetch("skillData.json"),
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
      {
        path: "/forget",
        Component: Forget,
      },
      {
        path: "/details/:skillId",
        // loader: () => fetch("skillData.json").then((res) => res.json()),
        element: (
          <PrivateRoutes>
            <SkillDetails></SkillDetails>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
