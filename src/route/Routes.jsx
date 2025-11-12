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
import ErrorBoundary from "../pages/ErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element:<ErrorBoundary>
         <Home></Home>
         </ErrorBoundary>,
        // hydrateFallbackElement: <ClimbingBoxLoader className="text-center mx-auto" color="#db6a69" />,
        // loader:  () => fetch('http://localhost:4000/movies')
      },
      {
        path: "/login",
        element: <ErrorBoundary>
        <Login></Login>
        </ErrorBoundary>
      },
      {
        path: "/register",
        element: <ErrorBoundary>
         <Register></Register>
         </ErrorBoundary>
      },
      {
        path: "/movies",
        element: <ErrorBoundary>
        <AllMovies></AllMovies>
         </ErrorBoundary>,
      },
      {
        path: "/movies/:id",
        element: <ErrorBoundary>
         <MovieDetails></MovieDetails>
         </ErrorBoundary>
      },
      {
        path: "/movies/update/:id",
        element: (
          <ErrorBoundary>
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
          </ErrorBoundary>
        ),
      },
      {
        path: "/movies/add",
        element: (
          <ErrorBoundary>
          <PrivateRoute>
            <AddMovies></AddMovies>
          </PrivateRoute>
          </ErrorBoundary>
        ),
      },
      {
        path: "/watchlist",
        element: (
          <ErrorBoundary>
          <PrivateRoute>
            <Mywatch></Mywatch>
          </PrivateRoute>
          </ErrorBoundary>
        ),

        loader: () => fetch("http://localhost:4000/watch"),
      },
      {
        path: "/movies/my-collection",
        element: (
          <ErrorBoundary>
          <PrivateRoute>
            <MyCollection></MyCollection>
          </PrivateRoute>
          </ErrorBoundary>
        ),
      },
      {
        path: "/genre",
        element: (
          <ErrorBoundary>
          <PrivateRoute>
            <Genre />
          </PrivateRoute>
          </ErrorBoundary>
        ),
      },
      {
        path: "/rating",
        element: (
          <ErrorBoundary>
          <PrivateRoute>
            <Rating />
          </PrivateRoute>
          </ErrorBoundary>
        ),
      }
    ],
  },
  
      {
    path: "*",
    element: <Errorpage></Errorpage>
  }
]);
