import React from 'react'
import UserDetailPageBody from '../UserDetail/UserDetailPageBody'
import UserDetailHeader from '../UserDetail/UserDetailHeader'
import UsersModal from "../Users/UsersModal";

const UserDetailPage = () => {
  return (
    <div>
      <UsersModal />
       <div className= "relative md:ml-[60px] ml-0">
        <UserDetailHeader/>
        <UserDetailPageBody/>
    </div>
    </div>
   
  )
}

export default UserDetailPage