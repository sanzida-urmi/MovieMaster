import { use } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

function PrivateRoute({children}) {
   const {user} =use(AuthContext);
 
  if(!user){
    return <Navigate to="/"/>
  }

  return children;
}

export default PrivateRoute
