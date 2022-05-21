import React from 'react'
import AddUsersBody from '../AddUsers/AddUsersBody'
import Header from "../ui/Header"


const AddUsersPage = () => {
  return (
    <div className= "relative md:ml-[60px] ml-0">
      <Header name="Create Account" buttons="hidden"/>
      <AddUsersBody/>
    </div>
  )
}

export default AddUsersPage