import React from "react"
import Backdrop from "./Backdrop"
import LogoutModal from "./LogoutModal"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Layout = () =>{
    return(
        <div>
            <LogoutModal/>
            <Navbar/>
            <Sidebar/>
            <Backdrop/>
        </div>

    )
}
export default Layout