import React from "react";
import Header from "../ui/Header";
import UsersPageBody from "../Users/UsersPageBody";

const UsersPage = () => {
  return(
    <div className="relative md:ml-[60px] ml-0">
      <Header name="Users"/>
      <UsersPageBody/>
  </div>
  ) 
};

export default UsersPage;
