import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute =()=>{

    const userData = JSON.parse(localStorage.getItem("userdata"));
    const isUserLoggedIn = Boolean(userData?.refreshToken);


   return isUserLoggedIn === true ? <Outlet/> : <Navigate to="/login" replace/> 
}

export default ProtectedRoute;