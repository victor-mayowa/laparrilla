import React from "react";
import UsersHeader from "../Users/UsersHeader";

import UsersPageBody from "../Users/UsersPageBody";
import Layout from "../Layout/Layout";
import UsersModal from "../Users/UsersModal";

const UsersPage = () => {
  return (
    <div>
      <Layout />
      <UsersModal/>
      <div className="relative md:ml-[60px] ml-0">
        <UsersHeader />
        <UsersPageBody />
      </div>
    </div>
  );
};

export default UsersPage;
