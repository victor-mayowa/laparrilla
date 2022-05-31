import React from "react";
import AddUsersBody from "../AddUsers/AddUsersBody";
import Header from "../ui/Header";
import Layout from "../Layout/Layout";

const AddUsersPage = () => {
  return (
    <div>
      <Layout />
      <div className="relative md:ml-[60px] ml-0">
        <Header name="Create Account" buttons="hidden" />
        <AddUsersBody />
      </div>
    </div>
  );
};

export default AddUsersPage;
