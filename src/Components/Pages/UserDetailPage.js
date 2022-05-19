import React from 'react'
import UserDetailPageBody from '../UserDetail/UserDetailPageBody'
import UserDetailHeader from '../UserDetail/UserDetailHeader'

const UserDetailPage = () => {
  return (
    <div className= "relative md:ml-[60px] ml-0">
        <UserDetailHeader/>
        <UserDetailPageBody/>
    </div>
  )
}

export default UserDetailPage