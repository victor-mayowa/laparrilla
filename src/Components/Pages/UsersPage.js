import React from "react";
import UsersHeader from "../Users/UsersHeader";
import UsersModal from "../Users/UsersModal";
import UsersPageBody from "../Users/UsersPageBody";


const UsersPage = () => {


  return (
    <div>
      <UsersModal />
      <div className="relative md:ml-[60px] ml-0"> 
        <UsersHeader />
        <UsersPageBody />
      </div>
    </div>
  );
};

export default UsersPage;
