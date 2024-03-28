import React from 'react'
import { Navigate, Outlet,useNavigate } from 'react-router-dom'
const ProtectedRoute = () => {

  const navigate = useNavigate()
  
const auth=localStorage.getItem("loggedin")

  return auth ? <Outlet/> : navigate('/home')
}

export default ProtectedRoute
