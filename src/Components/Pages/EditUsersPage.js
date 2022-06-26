import React from "react";
import EditUserHeader from "../EditUser/EditUserHeader";
import EditUserPageBody from "../EditUser/EditUserPageBody";
import AddCoursesModal from "../Courses/AddCoursesModal";
import AddBaseTypeModal from "../BaseType/AddBaseTypeModal";
import Layout from "../Layout/Layout";

const EditUsersPage = () => {
  return (
    <div>
      <Layout />
      <AddCoursesModal />
      <AddBaseTypeModal />
      <div className="relative md:ml-[60px] ml-0">
        <EditUserHeader />
        <EditUserPageBody />
      </div>
    </div>
  );
};

export default EditUsersPage;
