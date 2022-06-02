import React, {useContext} from 'react'
import {Navigate, Outlet } from "react-router-dom"
import DataContext from './Components/store/storeContext'

const ProtectedRoutes = () => {
    const dataCtx = useContext(DataContext)

    const isAuth = dataCtx.isAuth
    
    // const useAuth = () =>{
    //     const user = {loggedIn:false}
    //     return user && user.loggedIn
    // }
    // const isAuth = useAuth()

  return (
    isAuth ? <Outlet/> : <Navigate to="/"/>
  )
}

export default ProtectedRoutes