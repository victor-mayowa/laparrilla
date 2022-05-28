import React from "react";
import EditHeader from "../Edit/EditHeader";
import EditPageBody from "../Edit/EditPageBody";
import AddCoursesModal from "../Courses/AddCoursesModal"
import AddBaseTypeModal from "../BaseType/AddBaseTypeModal"                                 

const EditUsersPage = () => {
  return (
    <div>
      <AddCoursesModal/>
      <AddBaseTypeModal/>
      <div className="relative md:ml-[60px] ml-0">
        <EditHeader />
        <EditPageBody />
      </div>
    </div>
  );
};

export default EditUsersPage;
