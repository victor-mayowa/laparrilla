import React from "react";
import AddBaseTypeModal from "../BaseType/AddBaseTypeModal";
import BaseTypeBody from "../BaseType/BaseTypeBody";
import BaseTypeHeader from "../BaseType/BaseTypeHeader";
import DeleteBaseTypeModal from "../BaseType/DeleteBaseTypeModal";
import EditBaseTypeModal from "../BaseType/EditBaseTypeModal";
import Layout from "../Layout/Layout";

const BaseTypePage = () => {
  return (
    <div>
      <Layout />
      <DeleteBaseTypeModal />
      <AddBaseTypeModal />
      <EditBaseTypeModal />
      <div className="relative md:ml-[60px] ml-0">
        <BaseTypeHeader />
        <BaseTypeBody />
      </div>
    </div>
  );
};

export default BaseTypePage;
