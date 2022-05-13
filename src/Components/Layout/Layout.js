import React from "react"
import Backdrop from "./Backdrop"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Layout = () =>{
    return(
        <div>
            <Navbar/>
            <Sidebar/>
            <Backdrop/>
        </div>

    )
}
export default Layout