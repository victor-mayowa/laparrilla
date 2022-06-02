import React from "react";
import UserDetailPageBody from "../UserDetail/UserDetailPageBody";
import UserDetailHeader from "../UserDetail/UserDetailHeader";
import UsersModal from "../Users/UsersModal"
import Layout from "../Layout/Layout";

const UserDetailPage = () => {
  return (
    <div>
      <Layout />
      <UsersModal/>
      <div className=" md:ml-[60px] ml-0">
        <UserDetailHeader />
        <UserDetailPageBody />
      </div>
    </div>
  );
};

export default UserDetailPage;
