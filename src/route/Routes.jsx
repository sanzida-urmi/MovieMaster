import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllMovies from "../pages/AllMovies";
import Myprofile from "../pages/Myprofile";
import MovieDetails from "../pages/MovieDetails";
import AddMovies from "../pages/AddMovies";
import MyCollection from "../pages/MyCollection";
import Update from "../pages/Update";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
            loader:  () => fetch('http://localhost:4000/movies')
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
          loader:  () => fetch('http://localhost:4000/movies')
        },
        {
          path: "/myprofile",
          element: <Myprofile></Myprofile>
        },
        {
          path: "/movies/:id",
          element: <MovieDetails></MovieDetails>
        },
        {
          path: "/movies/update/:id",
          element: <Update></Update>
        },
        {
          path: "/movies/add",
          element: <AddMovies></AddMovies>
        },
        {
          path: "/movies/my-collection",
          element: <MyCollection></MyCollection>
        }
    ]
  },
]);