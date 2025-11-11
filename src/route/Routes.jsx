import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllMovies from "../pages/AllMovies";
import MovieDetails from "../pages/MovieDetails";
import AddMovies from "../pages/AddMovies";
import MyCollection from "../pages/MyCollection";
import Update from "../pages/Update";
import Mywatch from "../pages/Mywatch.jsx";
import Genre from "../pages/Genre.jsx";
import Rating from "../pages/Rating.jsx";
import { ClimbingBoxLoader } from "react-spinners";
import PrivateRoute from "../pages/PrivateRoute.jsx";
import Errorpage from "../pages/Errorpage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // hydrateFallbackElement: <ClimbingBoxLoader className="text-center mx-auto" color="#db6a69" />,
        // loader:  () => fetch('http://localhost:4000/movies')
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
      },
      {
        path: "/movies/:id",
        element: <MovieDetails></MovieDetails>
      },
      {
        path: "/movies/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
      {
        path: "/movies/add",
        element: (
          <PrivateRoute>
            <AddMovies></AddMovies>
          </PrivateRoute>
        ),
      },
      {
        path: "/watchlist",
        element: (
          <PrivateRoute>
            <Mywatch></Mywatch>
          </PrivateRoute>
        ),

        loader: () => fetch("http://localhost:4000/watch"),
      },
      {
        path: "/movies/my-collection",
        element: (
          <PrivateRoute>
            <MyCollection></MyCollection>
          </PrivateRoute>
        ),
      },
      {
        path: "/genre",
        element: (
          <PrivateRoute>
            <Genre />
          </PrivateRoute>
        ),
      },
      {
        path: "/rating",
        element: (
          <PrivateRoute>
            <Rating />
          </PrivateRoute>
        ),
      }
    ],
  },
  
      {
    path: "*",
    element: <Errorpage></Errorpage>
  }
]);
