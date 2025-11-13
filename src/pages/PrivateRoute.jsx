import { use, useState } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";

function PrivateRoute({children}) {
  const location = useLocation();
   const {user,loading, setLoading} =use(AuthContext);
  if(loading){
    return (
      <h1>loading</h1>
    )
  }
 
  if(!user){
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children;
}

export default PrivateRoute
