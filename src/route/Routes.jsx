import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllMovies from "../pages/AllMovies";
import Myprofile from "../pages/Myprofile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
            loader:  () => fetch('http://localhost:5000/movies')
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/movies",
          element: <AllMovies></AllMovies>,
          loader:  () => fetch('http://localhost:5000/movies')
        },
        {
          path: "/myprofile",
          element: <Myprofile></Myprofile>
        }
    ]
  },
]);