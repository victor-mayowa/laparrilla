import React from "react";
import EditKitchenPageBody from "../EditKItchen/EditKitchenPageBody";
import Layout from "../Layout/Layout";
import Header from "../ui/Header";

const EditKitchen = () => {
  return (
    <div>
      <Layout />
      <div className=" relative md:ml-[60px] ml-0">
        <Header name="Recipes" buttons="hidden" />
        <EditKitchenPageBody />
      </div>
    </div>
  );
};

export default EditKitchen;
