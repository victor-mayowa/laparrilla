import React from "react";
import UsersHeader from "../Users/UsersHeader";
import UsersPageBody from "../Users/UsersPageBody";

const UsersPage = () => {
  return(
    <div className="relative md:ml-[60px] ml-0">
      <UsersHeader/>
      <UsersPageBody/>
  </div>
  ) 
};

export default UsersPage;
