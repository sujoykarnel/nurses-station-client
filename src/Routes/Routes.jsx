import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs/AboutUs";
import Services from "../pages/Services/Services/Services";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Nurses from "../pages/Nurses/Nurses/Nurses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/nurses",
        element: <Nurses />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signUp",
    element: <SignUp />,
  },
]);
