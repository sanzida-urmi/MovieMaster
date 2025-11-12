import { use } from "react";
import { Navigate, useLocation } from "react-router";
import { ClimbingBoxLoader } from "react-spinners";
import { AuthContext } from "../context/AuthContext";

function PrivateRoute({children}) {
   const {user, loading} =use(AuthContext);

  if(loading){
    return(
      <div className="h-[97vh] flex justify-center items-center">
        <ClimbingBoxLoader color="#8b0000"/>
      </div>
    )
  }

  if(!user){
    
    return <Navigate to="/"/>
  }

  return children;
}

export default PrivateRoute
