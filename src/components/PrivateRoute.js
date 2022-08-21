import React from "react"
import { Route, Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function PrivateRoute({ children}) {
    const isAuthenticated = true;
        
    if (isAuthenticated ) {
      return children
    }
      
    return <Navigate to="/home" />
  }